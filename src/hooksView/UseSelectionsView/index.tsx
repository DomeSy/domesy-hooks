import { useSafeState, useSelections } from "../../hooks";
import { Button, Checkbox, Col, Row } from "antd";

const Index = () => {
  const [hideOdd, setHideOdd] = useSafeState(false);
  const lists = hideOdd ? [1, 3, 5, 7, 9] : [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const {
    selected,
    isSelected,
    toggle,
    selectAdd,
    selectDel,
    setSelect,
    allSelected,
    toggleAll,
    partiallySelected,
  } = useSelections(lists, [1, 2]);

  return (
    <>
      <div>选中的数字：{selected.join(",")}</div>
      <div
        style={{
          padding: "8px 0",
          borderBottom: "1px solid #E9E9E9",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Checkbox
          checked={allSelected}
          onClick={toggleAll}
          indeterminate={partiallySelected}
        >
          全选
        </Checkbox>
        <Checkbox checked={hideOdd} onClick={() => setHideOdd((v) => !v)}>
          半选
        </Checkbox>
        <div>
          <Button
            type="primary"
            style={{ marginRight: 4 }}
            onClick={() => setSelect([1, 3, 5])}
          >
            设置 1，3，5
          </Button>
          <Button
            type="primary"
            style={{ marginRight: 4 }}
            onClick={() => selectAdd([3, 7])}
          >
            添加 3，7
          </Button>
          <Button onClick={() => selectDel([3, 7])}>删除 3，7</Button>
        </div>
      </div>
      <Row style={{ padding: "8px 0" }}>
        {lists.map((ele) => (
          <Col span={12} key={ele}>
            <Checkbox checked={isSelected(ele)} onClick={() => toggle(ele)}>
              {ele}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Index;
