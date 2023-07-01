import React, { useEffect, useRef } from "react";
import { Button, Select, Checkbox, Input } from "antd";
import { FormInstance } from "./HooksForm/useForm/interface.d";
import Form from "./HooksForm";

const Index: React.FC = () => {
  const ref = useRef<FormInstance>(null);

  return (
    <>
      <h1>自定义Form：</h1>
      <Form
        initialValues={{ book: "玩转 React Hooks" }}
        ref={ref}
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
        <Form.Item label="小册名称" name="book">
          <Input placeholder="请输入小册名称" />
        </Form.Item>
        <Form.Item label="作者" name="name">
          <Input placeholder="请输入作者" />
        </Form.Item>

        <Form.Item label="提示语" tooltip="我是提示语" name="tooltip">
          <Input placeholder="提示语" />
        </Form.Item>

        <Form.Item
          label="必填1"
          name="rules"
          tooltip="rules必填"
          rules={[{ required: true, message: "请输入必填" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="必填2" tooltip="require必填" name="rules1" required>
          <Input />
        </Form.Item>
        <Form.Item
          label="只能输入数字"
          tooltip="正则检验"
          name="rules2"
          rules={[{ rule: /^[0-9]*$/, message: "请输入数字" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="个数要超过5个"
          tooltip="自定义校验"
          name="rules3"
          rules={[
            {
              rule: (v: any) => v.length > 5,
              message: "输入要超过5个",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="最终校验"
          name="rules4"
          tooltip="只能输入数字 + (不能超过5) + 必填 "
          required
          rules={[
            {
              rule: (v: any) => v.length < 5,
              message: "输入不能超过5个",
            },
            { rule: /^[0-9]*$/, message: "请输入数字" },
          ]}
        >
          <Input />
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button style={{ marginLeft: 4 }} htmlType="reset">
            重置
          </Button>
        </Form.Item>
      </Form>

      <div>
        ref获取表单数据：
        <Button
          type="primary"
          onClick={() => {
            console.log("ref获取实例", ref);
            const store = ref.current?.getFieldValue();
            console.log("ref 获取表单数据", store);
          }}
        >
          表单数据
        </Button>
        <Button
          type="primary"
          onClick={() =>
            ref.current?.submit((data: any) => {
              console.log("ref提交按钮", data);
            })
          }
          style={{ marginLeft: 8 }}
        >
          提交
        </Button>
        <Button
          style={{ marginLeft: 8 }}
          onClick={() => {
            ref.current?.resetFields(() => {
              console.log("ref 重置成功");
            });
          }}
        >
          重置
        </Button>
      </div>
    </>
  );
};

export default Index;
