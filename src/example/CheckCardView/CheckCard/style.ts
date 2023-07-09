import { StylesProps } from "./interface.d";
import { useCss } from "../../../hooks";

const styles: StylesProps = {};

styles["check-card"] = {
  width: "320px",
  position: "relative",
  display: " inline-block",
  color: "rgba(42, 46, 54, 0.9)",
  marginBlockEnd: "16px",
  marginInlineEnd: "16px",
  fontSize: "14px",
  lineHeight: "24px",
  verticalAlign: "top",
  backgroundColor: "#fff",
  borderRadius: "6px",
  cursor: "pointer",
  transition: " all 0.3s",
  border: "1px solid #d9d9d9",
  "&:hover": {
    borderColor: "#1677ff",
  },
};

styles["check-card-checked"] = {
  borderColor: "#1677ff",
  backgroundColor: "#b0d0ff",
  "&:after": {
    position: "absolute",
    insetBlockStart: "2px",
    insetInlineEnd: "2px",
    width: "0px",
    height: "0px",
    border: "6px solid #1677ff",
    borderBlockEnd: "6px solid transparent",
    borderInlineStart: "6px solid transparent",
    borderStartEndRadius: "2px",
    content: "''",
  },
};

styles["check-card-disabled"] = {
  borderColor: "#d9d9d9",
  backgroundColor: "rgba(42, 46, 54, 0.04)",
  cursor: "not-allowed",
};

styles["check-card-disabled-after"] = {
  "&::after": {
    position: "absolute",
    insetBlockStart: "2px",
    insetInlineEnd: "2px",
    width: "0px",
    height: "0px",
    border: " 6px solid rgba(42, 46, 54, 0.25)",
    borderBlockEnd: "6px solid transparent",
    borderInlineStart: "6px solid transparent",
    borderStartEndRadius: "2px",
    content: "''",
  },
};

styles["check-card-content"] = {
  display: "flex",
  paddingInline: "12px",
  paddingBlock: "16px",
};

styles["check-card-detail"] = {
  overflow: "hidden",
  width: "100%",
  "div:not(:last-child)": {
    marginBlockEnd: "4px",
  },
};

styles["check-card-extra"] = {
  display: "block",
};

styles["check-card-header"] = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
styles["check-card-title"] = {
  overflow: "hidden",
  color: "rgba(42, 46, 54, 0.9)",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

styles["check-card-description"] = {
  color: "rgba(42, 46, 54, 0.65)",
};

styles["check-card-avatar"] = {
  paddingInlineEnd: "8px",
};

styles["check-card-group"] = {
  display: "inline-block",
};

styles["check-card-loading-content"] = {
  paddingInline: "16px",
  paddingBlock: "12px",
};

styles["check-card-loading"] = {
  background: `linear-gradient(90deg, rgba(54, 61, 64, 0.2), rgba(54, 61, 64, 0.4), rgba(54, 61, 64, 0.2))`,
  height: "14px",
  marginBlock: "4px",
};

export default styles;
