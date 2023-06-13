import { useState, useEffect } from "react";
import FormContext from "./useForm/FormContext";
import { DataProps } from "./useForm/interface.d";
import useForm from "./useForm";

interface FormProps {
  onReset?: () => void;
  onFinish?: (data: any) => void;
  onFinishFailed?: (errorInfo: any) => void;
  initialValues?: DataProps;
  [key: string]: any;
}

const Index = (props: FormProps) => {
  const {
    children,
    onFinish = (data: any) => {},
    onReset = () => {},
    onFinishFailed = (errorInfo: any) => {},
    initialValues = {},
    ...payload
  } = props;

  const [formRef] = useForm(initialValues);

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

export default Index;
