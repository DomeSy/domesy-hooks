import { useMemo, useContext, useEffect } from "react";
import { Avatar, ConfigProvider } from "antd";
import {
  CheckCardProps,
  StylesBooleanProps,
  StylesStringProps,
} from "./interface.d";
import { useCss, useSafeState, useCreation } from "../../../hooks";
import GroupContext from "./GroupContext";
import Loading from "./loading";
import styles from "./style";
import classNames from "classnames";
import Group from "./Group";

const CheckCard = (props: CheckCardProps) => {
  const {
    avatar,
    title,
    extra,
    description,
    disabled = false,
    loading = false,
    style = {},
    ...params
  } = props;

  const [checked, setChecked] = useSafeState<boolean>(
    params.defaultChecked || false
  );
  const group = useContext(GroupContext);

  const selectData: any = {};

  useEffect(() => {
    params.value && group?.registerValue?.(params.value);
    return () => {
      params.value && group?.cancelValue?.(params.value);
    };
  }, [params.value]);

  selectData.checked = checked;
  selectData.loading = loading;
  if (group) {
    // 通过 Group 组件控制对应的选中状态
    const isChecked = group.multiple
      ? group.value?.includes(params.value)
      : group.value === params.value;
    selectData.checked = isChecked;
    selectData.loading = loading || group.loading;
  }

  const styleClassName: StylesBooleanProps = {};
  styleClassName[useCss(styles["check-card"])] = true;
  styleClassName[useCss(styles["check-card-checked"])] = !!selectData.checked;
  styleClassName[useCss(styles["check-card-disabled"])] = !!disabled;
  styleClassName[useCss(styles["check-card-disabled-after"])] =
    !!selectData.checked && !!disabled;

  const styleDateMemo: StylesStringProps = {
    "check-card-avatar": useCss(styles["check-card-avatar"]),
    "check-card-header": useCss(styles["check-card-header"]),
    "check-card-title": useCss(styles["check-card-title"]),
    "check-card-extra": useCss(styles["check-card-extra"]),
    "check-card-description": useCss(styles["check-card-description"]),
    "check-card-content": useCss(styles["check-card-content"]),
    "check-card-detail": useCss(styles["check-card-detail"]),
  };

  const dataMemo = useCreation(() => {
    if (selectData.loading) return <Loading />;
    const avatarDom = avatar ? (
      <div className={styleDateMemo["check-card-avatar"]}>
        {typeof avatar === "string" ? (
          <Avatar size={48} shape="square" src={avatar} />
        ) : (
          avatar
        )}
      </div>
    ) : null;

    const header = (title ?? extra) !== null && (
      <div className={styleDateMemo["check-card-header"]}>
        <div className={styleDateMemo["check-card-title"]}>{title}</div>
        {extra && (
          <div className={styleDateMemo["check-card-extra"]}>{extra}</div>
        )}
      </div>
    );

    const descriptionDom = description ? (
      <div className={styleDateMemo["check-card-description"]}>
        {description}
      </div>
    ) : null;

    return (
      <div className={styleDateMemo["check-card-content"]}>
        {avatarDom}
        {header || descriptionDom ? (
          <div className={styleDateMemo["check-card-detail"]}>
            {header}
            {descriptionDom}
          </div>
        ) : null}
      </div>
    );
  }, [title, extra, description, selectData.loading]);

  return (
    <div
      className={classNames(styleClassName)}
      style={style}
      onClick={(v) => {
        if (!disabled && !selectData.loading) {
          params.onClick && params.onClick(v);
          params.onChange && params.onChange(!checked);
          group?.selectOption?.({ value: props.value });
          setChecked((v) => !v);
        }
      }}
    >
      {dataMemo}
    </div>
  );
};

CheckCard.Group = Group;

export default CheckCard;
