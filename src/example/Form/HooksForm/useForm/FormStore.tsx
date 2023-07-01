import {
  FormInstance,
  ConfigWayProps,
  DataProps,
  ReducerAction,
  NameProps,
  validateRuleListProps,
  updateProps,
  validateRule,
  updateChangeProps,
} from "./interface.d";
import type { validateStatusProps } from "./interface.d";

class FormStore {
  store: DataProps = {}; // 管理表单的整体数据
  update_store: updateChangeProps = {}; // 保存更新的对象
  initialValues: DataProps = {}; // 保存初始值
  configWays: ConfigWayProps = {}; // 收录对应的方法集合
  validateRule: validateRule = {}; // 校验表单的规则
  validateQueue: any[] = []; // 校验队列

  constructor(initialValues: DataProps) {
    this.store = initialValues;
    this.initialValues = initialValues;
  }

  // 用于暴露方法
  public getDetail = (): FormInstance => ({
    unRegisterField: this.unRegisterField, // 卸载表单方法
    registerField: this.registerField, // 注册表单方法
    getFieldValue: this.getFieldValue, // 获取对应的值
    dispatch: this.dispatch, // 方法派发
    setConfigWays: this.setConfigWays, // 设置方法区间
    submit: this.submit, // 用于表单提交
    resetFields: this.resetFields, // 重置表单
    getFieldValidate: this.getFieldValidate, // 获取表单的验证值
  });

  // 注册表单方法
  registerField = (name: NameProps, updateChange: updateProps) => {
    this.update_store[name] = updateChange;
    this.validateRule[name] = this.createValidate(name, updateChange);
  };

  // 创建一个验证模块
  createValidate(
    name: NameProps,
    updateChange: updateProps
  ): validateRuleListProps | null {
    const { rules = [], required = false, message = "" } = updateChange;
    if (rules.length === 0 && !required) return null;

    // 抽离出必填项
    const requiredFlag = required || rules.find((v) => v?.required)?.required;

    // 如果存在必填则更新对应表单
    if (requiredFlag) this.updateStoreField(name);

    return {
      message,
      requiredMessage: message,
      required: requiredFlag || false,
      status: "pen", // 设置为等待状态
      rules: rules.filter((v) => v?.rule), // 过滤掉有required的项
    };
  }

  // 卸载表单方法
  unRegisterField = (name: NameProps) => {
    delete this.update_store[name];
    delete this.validateRule[name];
  };

  // 获取对应的值
  getFieldValue = (name?: NameProps) => {
    if (name) return this.store[name];
    return this.store;
  };

  // 获取表单的验证值
  getFieldValidate = (name: NameProps) => {
    return this.validateRule[name];
  };

  // 方法派发
  dispatch = (action: ReducerAction) => {
    switch (action.type) {
      // 触发更新
      case "updateValue": {
        const { name, value } = action;
        this.updateValue(name, value);
        break;
      }
      // 触发检验
      case "validateField": {
        const { name } = action;
        this.validateFieldValue(name); // 触发单个更新
        break;
      }
      default:
    }
  };

  // 更新
  updateValue = (name: NameProps, value: any) => {
    this.store = {
      ...this.store,
      [name]: value,
    };

    this.updateStoreField(name);
  };

  // 更新对应的表单
  updateStoreField = (name: NameProps) => {
    const update = this.update_store[name];
    if (update) update?.updateValue();
  };

  // 设置方法区间
  setConfigWays = (configWays: ConfigWayProps) => {
    this.configWays = configWays;
  };

  // 用于表单提交
  submit = (cb?: any) => {
    const status = this.validateField();

    const { onFinish, onFinishFailed } = this.configWays;

    if (!status) {
      const errorFields = this.errorValidateFields();

      cb &&
        cb({
          errorFields,
          values: this.store,
        });

      onFinishFailed &&
        onFinishFailed({
          errorFields,
          values: this.store,
        });
    } else {
      onFinish && onFinish(this.store);
      cb && cb(this.store);
    }
  };

  // 错误收集
  errorValidateFields = () => {
    let errorList: any = [];
    Object.keys(this.validateRule).forEach((name) => {
      const data = this.validateRule[name];
      if (data && data.status === "rej") {
        errorList = [...errorList, { name, errors: data.message }];
      }
    });
    return errorList;
  };

  // 用于集中表单验证
  validateField = () => {
    let flag = true;
    Object.keys(this.validateRule).forEach((name) => {
      const status = this.validateFieldValue(name);
      if (status === "rej") flag = false;
    });
    return flag;
  };

  // 用于单个验证表单
  validateFieldValue = (name: NameProps) => {
    const data = this.validateRule[name];
    if (!data) return null;
    const value = this.store[name];
    const last_status = data.status;
    const last_message = data.message;
    let status: validateStatusProps = "res";
    if (data.required && !value) {
      status = "rej";
      data.message = data?.requiredMessage || "";
    }

    data.rules.map((v) => {
      if (status !== "rej" && value && v.rule) {
        if (v.rule instanceof RegExp && !v.rule.test(value)) {
          status = "rej";
          data.message = v?.message || "";
        }

        if (typeof v.rule === "function" && !v.rule(value)) {
          status = "rej";
          data.message = v?.message || "";
        }
      }
    });

    // 如果状态或错误提示不一致，则进行更新
    if (last_status !== status || last_message !== data.message) {
      const validateUpdate = this.updateStoreField.bind(this, name);
      this.validateQueue.push(validateUpdate);
    }

    this.promiseValidate();

    data.status = status;
    return status;
  };

  // 异步校验队列
  promiseValidate = () => {
    if (this.validateQueue.length === 0) return null;
    Promise.resolve().then(() => {
      do {
        let validateUpdate = this.validateQueue.shift();
        validateUpdate && validateUpdate(); /* 触发更新 */
      } while (this.validateQueue.length > 0);
    });
  };

  // 重置表单
  resetFields = (cb?: () => void) => {
    const { onReset } = this.configWays;
    Object.keys(this.store).forEach((key) => {
      // 重置表单的时候，如果有初始值，就用初始值，没有就删除
      this.initialValues[key]
        ? (this.store[key] = this.initialValues[key])
        : delete this.store[key];
      this.updateStoreField(key);
    });

    Object.keys(this.validateRule).forEach((key) => {
      const data = this.validateRule[key];
      if (data) {
        if (data.status === "rej") this.updateStoreField(key);
        data.status = "pen";
      }
    });
    cb && cb();
    onReset && onReset();
  };
}

export default FormStore;
