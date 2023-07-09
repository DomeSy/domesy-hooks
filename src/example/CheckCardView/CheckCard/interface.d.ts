export interface CheckCardProps {
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  description?: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  loading?: boolean;
  value?: any;
  onChange?: (checked: boolean) => void;
  onClick?: (v: any) => void;
}

export interface GroupProps {
  initValue?: GroupValueType;
  value?: GroupValueType;
  multiple?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  loading?: boolean;
  onChange?: (groupValue: GroupValueType) => void;
}

export interface SelectGroupConnextType {
  value?: any;
  multiple?: boolean;
  loading?: boolean;
  selectOption?: (option: any) => void;
  registerValue?: (value: any) => void;
  cancelValue?: (value: any) => void;
}

export type ValueType = string | number;
export type GroupValueType = ValueType | ValueType[] | undefined;

type CSSKey = keyof React.CSSProperties;

type CSSProps =
  | React.CSSProperties
  | {
      [key: Exclude<string, CSSKey>]: CSSProps;
    };

export interface StylesProps {
  [key: string]: CSSProps;
}

export interface StylesBooleanProps {
  [key: string]: boolean;
}
export interface StylesStringProps {
  [key: string]: string;
}

export type ValueType = string | number;
export type GroupValueType = ValueType | ValueType[] | undefined;

export interface SelectOptionProps {
  value: ValueType;
}
