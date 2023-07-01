import { cloneElement, isValidElement, useEffect, useContext } from "react";
import { Layout } from "./FormItemCommon";
import FormContext from "./useForm/FormContext";
import { FormInstance, NameProps, updateProps } from "./useForm/interface.d";
import { useCss, useCreation, useUpdate } from "../../../hooks";

// onFinishFailed 回调后的函数

interface FormItemProps {
  label?: string;
  tooltip?: string;
  [key: string]: any;
}

const FormItem = (props: FormItemProps) => {
  const { name, children } = props;
  const update = useUpdate();

  // const [state, dispatch] = useConnect();
  const contextValue = useContext(FormContext);
  const {
    getFieldValue,
    dispatch,
    registerField,
    unRegisterField,
    getFieldValidate,
  } = contextValue;

  // 优化
  const updateChange: updateProps = useCreation(() => {
    return {
      message: props?.message || `请填写${props?.label}字段`,
      required: props?.required,
      rules: props?.rules,
      updateValue: () => update(),
    };
  }, [contextValue, name]);

  useEffect(() => {
    // 注册
    name && registerField(name, updateChange);
    return () => {
      //卸载
      name && unRegisterField(name);
    };
  }, [updateChange]);

  let childrenPro;

  // 利用 isValidElement 来判断传递的数据是否是 React.ReactElement. 注意他可以判断多节点的情况，和无值的情况
  if (isValidElement(children) && name) {
    // 利用 cloneElement 给传递的组件加入 value 和 onChange 属性，剥离出对应的方法
    childrenPro = cloneElement(children as React.ReactElement, {
      value: getFieldValue(name),
      onChange: (v: any) => {
        let payload: any = {};

        // 判断属于那种
        const value = v?.target?.localName === "input" ? v?.target?.value : v;
        payload[name] = value;

        // 更新 store 中的值
        dispatch({
          type: "updateValue",
          name,
          value,
        });

        // 触发验证
        dispatch({
          type: "validateField",
          name,
        });
      },
      status: getFieldValidate(name)?.status === "rej" ? "error" : undefined,
    });
  } else {
    childrenPro = children;
  }

  return (
    <Layout {...props} {...getFieldValidate(name)}>
      {childrenPro}
    </Layout>
  );
};

export default FormItem;
