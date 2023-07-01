export interface ConfigWayProps {
  onFinish?: (values: any) => void;
  onReset?: () => void;
  onFinishFailed?: (values: any) => void;
  // onFinishFailed?: (errorInfo: any) => void;
}

export interface FormInstance {
  registerField: (name: NameProps, updateChange: DataProps) => void;
  unRegisterField: (name: NameProps) => void;
  getFieldValue: (name?: NameProps) => any;
  dispatch: (action: ReducerAction) => void;
  setConfigWays: (callbacks: ConfigWayProps) => void;
  submit: (cb?: any) => void;
  resetFields: (cb?: () => void) => void;
  getFieldValidate: (name: NameProps) => any;
}

export interface updateChangeProps {
  [key: string]: updateProps;
}

export interface updateProps {
  message?: string;
  required?: boolean;
  updateValue?: any;
  rules?: validateRuleProps[];
}

export interface validateRule {
  [key: string]: validateRuleListProps | null;
}

export interface validateRuleListProps {
  required: boolean;
  requiredMessage?: string;
  message: string;
  status: validateStatusProps;
  rules: rulesProps[];
}

interface rulesProps {
  rule?: RegExp | ((value: any) => boolean);
  message?: string;
}

export interface validateRuleProps {
  required?: boolean;
  message?: string;
  rule?: RegExp | ((value: any) => boolean);
}

export type validateStatusProps = "res" | "rej" | "pen"; // res 成功 rej 失败 pen 等待

export interface DataProps {
  [key: string]: any;
}

export type NameProps = string | number;

export type ReducerAction = UpdateAction | validateAction;

interface UpdateAction {
  type: "updateValue";
  name: NameProps;
  value: any;
}

interface validateAction {
  type: "validateField";
  name: NameProps;
}
