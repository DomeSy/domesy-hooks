import { useReactive } from "../../hooks";
import { Button, Input } from "antd";

const Index = () => {
  const state = useReactive<any>({
    count: 0,
    name: "大家好，我是小杜杜，一起玩转Hooks吧！",
    flag: true,
    arr: [],
    bugs: ["小杜杜", "react", "hook"],
    addBug(bug: string) {
      this.bugs.push(bug);
    },
    get bugsCount() {
      return this.bugs.length;
    },
  });

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>基本使用：</div>
      <div style={{ marginTop: 8 }}> 对数字进行操作：{state.count}</div>
      <div
        style={{
          margin: "8px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button type="primary" onClick={() => state.count++}>
          加1
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => state.count--}
        >
          减1
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => (state.count = 7)}
        >
          设置为7
        </Button>
      </div>
      <div style={{ marginTop: 8 }}> 对字符串进行操作：{state.name}</div>
      <div
        style={{
          margin: "8px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button type="primary" onClick={() => (state.name = "小杜杜")}>
          设置为小杜杜
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => (state.name = "Domesy")}
        >
          设置为Domesy
        </Button>
      </div>
      <div style={{ marginTop: 8 }}>
        {" "}
        对布尔值进行操作：{JSON.stringify(state.flag)}
      </div>
      <div
        style={{
          margin: "8px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button type="primary" onClick={() => (state.flag = !state.flag)}>
          切换状态
        </Button>
      </div>
      <div style={{ marginTop: 8 }}>
        {" "}
        对数组进行操作：{JSON.stringify(state.arr)}
      </div>
      <div
        style={{
          margin: "8px 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button
          type="primary"
          onClick={() => state.arr.push(Math.floor(Math.random() * 100))}
        >
          push
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => state.arr.pop()}
        >
          pop
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => state.arr.shift()}
        >
          shift
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => state.arr.unshift(Math.floor(Math.random() * 100))}
        >
          unshift
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => state.arr.reverse()}
        >
          reverse
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 8 }}
          onClick={() => state.arr.sort()}
        >
          sort
        </Button>
      </div>
      <div style={{ fontWeight: "bold", marginTop: 8 }}>计算属性：</div>
      <div style={{ marginTop: 8 }}>数量：{state.bugsCount} 个</div>
      <div style={{ margin: "8px 0" }}>
        <form
          onSubmit={(e) => {
            state.bug ? state.addBug(state.bug) : state.addBug("domesy");
            state.bug = "";
            e.preventDefault();
          }}
        >
          <Input
            type="text"
            value={state.bug}
            style={{ width: 200 }}
            onChange={(e) => (state.bug = e.target.value)}
          />
          <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
            增加
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => state.bugs.pop()}>
            删除
          </Button>
        </form>
      </div>
      <ul>
        {state.bugs.map((bug: any, index: number) => (
          <li key={index}>{bug}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
