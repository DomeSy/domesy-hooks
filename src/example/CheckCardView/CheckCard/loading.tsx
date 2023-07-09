import { useCss } from "../../../hooks";
import { Col, Row } from "antd";
import styles from "./style";

const Loading = () => {
  return (
    <div className={useCss(styles["check-card-loading-content"])}>
      <Row gutter={8}>
        <Col span={22}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={8}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
        <Col span={14}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
        <Col span={16}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={13}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
        <Col span={9}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={4}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
        <Col span={3}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
        <Col span={14}>
          <div className={useCss(styles["check-card-loading"])} />
        </Col>
      </Row>
    </div>
  );
};
export default Loading;
