import { useSafeState, useCreation } from "..";
const useSelections = <T,>(lists: T[], initValues: T[] = []) => {
  const [selected, setSelected] = useSafeState<T[]>(initValues);

  // 通过new Set去处理选中的数据,转化为数组需要使用Array.from
  const selectedSet = useCreation(() => new Set(selected), [selected]);

  const isSelected = (data: T) => selectedSet.has(data);

  // 增加
  const selectAdd = (data: T | T[]) => {
    if (Array.isArray(data)) {
      data.map((item) => selectedSet.add(item));
    } else {
      selectedSet.add(data);
    }
    return setSelected(Array.from(selectedSet));
  };

  // 删除
  const selectDel = (data: T | T[]) => {
    if (Array.isArray(data)) {
      data.map((item) => selectedSet.delete(item));
    } else {
      selectedSet.delete(data);
    }
    return setSelected(Array.from(selectedSet));
  };

  // 设置
  const setSelect = (data: T | T[]) => {
    selectedSet.clear();
    if (Array.isArray(data)) {
      data.map((item) => selectedSet.add(item));
    } else {
      selectedSet.add(data);
    }
    return setSelected(Array.from(selectedSet));
  };

  // 状态切换
  const toggle = (data: T) =>
    isSelected(data) ? selectDel(data) : selectAdd(data);

  // 全部未选中
  const noneSelected = useCreation(
    () => lists.every((ele) => !selectedSet.has(ele)),
    [lists, selectedSet]
  );

  // 全部选中
  const allSelected = useCreation(() => {
    return lists.every((ele) => selectedSet.has(ele));
  }, [lists, selectedSet]);

  // 是否半选
  const partiallySelected = useCreation(
    () => !noneSelected && !allSelected,
    [noneSelected, allSelected]
  );

  // 全选
  const selectAll = () => {
    lists.map((item) => selectedSet.add(item));
    setSelected(Array.from(selectedSet));
  };

  const unSelectAll = () => {
    lists.map((item) => selectedSet.delete(item));
    setSelected(Array.from(selectedSet));
  };

  const toggleAll = () => (allSelected ? unSelectAll() : selectAll());

  return {
    selected, // 以选择的元素组
    isSelected, // 是否被选中
    selectAdd,
    selectDel,
    toggle,
    setSelect,
    noneSelected,
    allSelected,
    partiallySelected,
    selectAll,
    unSelectAll,
    toggleAll,
  } as const;
};

export default useSelections;
