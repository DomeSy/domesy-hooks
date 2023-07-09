import React from "react";
import CheckCard from "./CheckCard";
import { Button, message } from "antd";
import Form from "../Form/HooksForm";
import styles from "./CheckCard/style";

const Index: React.FC = () => {
  return (
    <>
      <h1>基本操作</h1>
      <CheckCard
        avatar={
          "https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        }
        title="玩转 React Hooks"
        description="大家好，我是小杜杜，一起玩转Hooks吧"
        // loading
        // defaultChecked
        // disabled
        onChange={(checked) => {
          console.log("checked", checked);
        }}
        onClick={() => {
          console.log("点击");
        }}
      />
      <CheckCard
        avatar={
          "https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        }
        title="禁用"
        description="大家好，我是小杜杜，一起玩转Hooks吧"
        disabled
      />
      <CheckCard
        avatar={
          "https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        }
        title="禁用选中"
        description="大家好，我是小杜杜，一起玩转Hooks吧"
        defaultChecked
        disabled
      />
      <h1>额外操作</h1>
      <CheckCard
        avatar={
          "https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        }
        extra={
          <Button
            type="link"
            onClick={(e) => {
              e.stopPropagation();
              message.info("记得阻止事件冒泡");
            }}
          >
            操作
          </Button>
        }
        title="玩转 React Hooks"
        description="大家好，我是小杜杜，一起玩转Hooks吧"
      />
      <h1>加载状态</h1>
      <CheckCard
        avatar={
          "https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg"
        }
        title="玩转 React Hooks"
        description="大家好，我是小杜杜，一起玩转Hooks吧"
        loading
      />
      <h1>Group基本使用</h1>
      <CheckCard.Group
        // initValue={"A"}
        // multiple
        onChange={(data) => {
          console.log(data, "状态改变");
        }}
      >
        <CheckCard title="Card A" description="一起玩转Hooks吧" value="A" />
        <CheckCard title="Card B" description="一起玩转Hooks吧" value="B" />
        <CheckCard title="Card C" description="一起玩转Hooks吧" value="C" />
        <CheckCard
          title="Card D"
          disabled
          description="一起玩转Hooks吧"
          value="D"
        />
      </CheckCard.Group>
      <h1>在 Form 表单的应用</h1>
      <Form
        initialValues={{ card: "A" }}
        onFinish={(data: any) => {
          console.log("表单数据:", data);
        }}
        onReset={() => {
          console.log("重制表单成功");
        }}
      >
        <Form.Item label="选择卡片-单选" name="card" styles={{ with: "100%" }}>
          <CheckCard.Group>
            <CheckCard title="Card A" description="一起玩转Hooks吧" value="A" />
            <CheckCard title="Card B" description="一起玩转Hooks吧" value="B" />
            <CheckCard title="Card C" description="一起玩转Hooks吧" value="C" />
          </CheckCard.Group>
        </Form.Item>
        <Form.Item label="选择卡片-多选" name="card-multiple">
          <CheckCard.Group multiple>
            <CheckCard title="Card A" description="一起玩转Hooks吧" value="A" />
            <CheckCard title="Card B" description="一起玩转Hooks吧" value="B" />
            <CheckCard title="Card C" description="一起玩转Hooks吧" value="C" />
          </CheckCard.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button style={{ marginLeft: 4 }} htmlType="reset">
            重置
          </Button>
        </Form.Item>
      </Form>
      <h1>集中控制 Loading：</h1>
      <CheckCard.Group loading>
        <CheckCard title="Card A" description="一起玩转Hooks吧" value="A" />
        <CheckCard title="Card B" description="一起玩转Hooks吧" value="B" />
        <CheckCard title="Card C" description="一起玩转Hooks吧" value="C" />
      </CheckCard.Group>
    </>
  );
};

export default Index;
