import React from "react";
import { Button, Select, Form, Input } from "antd";

const Index: React.FC = () => {
  return (
    <>
      <h1>AntD Form：</h1>
      <Form
        // name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ book: "玩转 React Hooks" }}
        onFinish={(data: any) => {
          console.log("表单数据:", data);
        }}
        onFinishFailed={(errorInfo: any) => {
          console.log("Failed:", errorInfo);
        }}
        onReset={() => {
          console.log("重制表单成功");
        }}
      >
        <Form.Item tooltip="测试" label="小册名称" name="book">
          <Input placeholder="请输入小册名称" />
        </Form.Item>

        <Form.Item label="作者" name="name">
          <Input placeholder="请输入作者" />
        </Form.Item>

        <Form.Item
          label="必填"
          name="rules"
          rules={[{ required: true, message: "请输入规则" }]}
        >
          <Input placeholder="请输入作者" />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "请输入必填" }]}
          label="选择框必填"
          name="select"
        >
          <Select
            style={{ width: 120 }}
            allowClear
            options={[
              { value: "React", label: "React" },
              { value: "Vue", label: "Vue" },
              { value: "Hooks", label: "Hooks" },
            ]}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button style={{ marginLeft: 4 }} htmlType="reset">
            重置
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Index;
