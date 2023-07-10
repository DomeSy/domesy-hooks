import { Tabs } from "antd";
import { useReactive } from "./hooks";
import { useState } from "react";
import communicateMenu from "./communicateMenu";
import React16Menu from "./React16Menu";
import React18Menu from "./React18Menu";
import HooksMenu from "./HooksMenu";
import HooksMenu2 from "./HooksMenu2";
import CodeMenu from "./CodeMenu";
import ExampleMenu from "./ExampleMenu";

function App(props: any) {
  const [key, setKye] = useState("1");

  const items = [
    {
      key: "1",
      label: `通行状态`,
      children: (
        <div>
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={communicateMenu}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: `React v16 Hooks`,
      children: (
        <div>
          <Tabs tabPosition="left" defaultActiveKey="1" items={React16Menu} />
        </div>
      ),
    },
    {
      key: "3",
      label: `React v18 Hooks`,
      children: (
        <div>
          <Tabs tabPosition="left" defaultActiveKey="1" items={React18Menu} />
        </div>
      ),
    },
    {
      key: "4",
      label: `自定义Hooks1`,
      children: (
        <div>
          <Tabs tabPosition="left" defaultActiveKey="1" items={HooksMenu} />
        </div>
      ),
    },
    {
      key: "5",
      label: `自定义Hooks2`,
      children: (
        <div>
          <Tabs tabPosition="left" defaultActiveKey="1" items={HooksMenu2} />
        </div>
      ),
    },
    {
      key: "6",
      label: `源码篇Hooks`,
      children: (
        <div>
          <Tabs tabPosition="left" defaultActiveKey="1" items={CodeMenu} />
        </div>
      ),
    },
    {
      key: "7",
      label: `实战篇Hooks`,
      children: (
        <div>
          <Tabs tabPosition="left" defaultActiveKey="1" items={ExampleMenu} />
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Tabs activeKey={key} items={items} onChange={(key) => setKye(key)} />
    </div>
  );
}

export default App;
