import { forwardRef, useImperativeHandle } from "react";
import FormContext from "./useForm/FormContext";
import { DataProps, FormInstance } from "./useForm/interface.d";
import useForm from "./useForm";

interface FormProps {
  onReset?: () => void;
  onFinish?: (data: any) => void;
  onFinishFailed?: (errorInfo: any) => void;
  initialValues?: DataProps;
  form?: FormInstance;
  [key: string]: any;
}

const Index = (props: FormProps, ref: any) => {
  const {
    form,
    children,
    onFinish = (data: any) => {},
    onReset = () => {},
    onFinishFailed = (errorInfo: any) => {},
    initialValues = {},
    ...payload
  } = props;

  const [formRef] = useForm(initialValues, form);

  // 用于剔除方法，不提供给外部使用
  const {
    registerField,
    unRegisterField,
    dispatch,
    setConfigWays,
    ...formRefInstance
  } = formRef;

  /* Form 能够被 ref 标记，并操作实例。 */
  useImperativeHandle(ref, () => formRefInstance, []);

  formRef.setConfigWays({
    onFinish,
    onReset,
    onFinishFailed,
  });

  return (
    <form
      {...payload}
      onSubmit={(e) => {
        // 阻止默认事件
        e.preventDefault();
        e.stopPropagation();
        formRef.submit();
      }}
      onReset={(e) => {
        e.preventDefault();
        e.stopPropagation();
        formRef.resetFields(); /* 重置表单 */
      }}
    >
      <FormContext.Provider value={formRef}>{children}</FormContext.Provider>
    </form>
  );
};

export default forwardRef(Index);
