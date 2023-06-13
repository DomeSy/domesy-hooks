export interface ConfigWayProps {
  onFinish?: (values: any) => void;
  onReset?: () => void;
  onFinishFailed?: (values: any) => void;
  // onFinishFailed?: (errorInfo: any) => void;
}

export interface FormInstance {
  unRegisterField: (name: NameProps) => void;
  registerField: (
    name: NameProps,
    updateChange: DataProps
    // rules?: DataValidateProps[]
  ) => void;
  getFieldValue: (name: NameProps) => any;
  dispatch: (action: ReducerAction) => void;
  setConfigWays: (callbacks: ConfigWayProps) => void;
  submit: () => void;
  resetFields: () => void;
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
  message: string;
  required: boolean;
  status: validateStatusProps;
  requiredMessage?: string;
  rules: rulesProps[];
}

interface rulesProps {
  rule?: RegExp | ((value: any) => boolean);
  message?: string;
}

export interface validateRuleProps {
  message?: string;
  required?: boolean;
  rule?: RegExp | ((value: any) => boolean);
  status?: validateStatusProps;
}

export type validateStatusProps = "res" | "rej" | "pen"; // res 成功 rej 失败 pen 等待

export interface DataValidateProps {
  [key: string]: validateRuleProps[] | null;
}

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
