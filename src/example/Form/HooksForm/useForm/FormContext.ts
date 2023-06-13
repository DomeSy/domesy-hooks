import { createContext } from "react";
import { FormInstance } from "./interface.d";

const warningFunc: any = () => {};

const FormContext = createContext<FormInstance>({
  registerField: warningFunc,
  unRegisterField: warningFunc,
  resetFields: warningFunc,
  getFieldValue: warningFunc,
  dispatch: warningFunc,
  setConfigWays: warningFunc,
  submit: warningFunc,
  getFieldValidate: warningFunc,
});

export default FormContext;
