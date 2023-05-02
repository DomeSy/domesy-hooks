import { renderHook, act } from "@testing-library/react";
import useSelections from "./";

const lists = [1, 2, 3];

describe("useSelections", () => {
  it("should be defined", () => {
    expect(useSelections).toBeDefined();
  });
  it("测试单个功能", () => {
    const { result } = renderHook(() => useSelections(lists));
    const { toggle, selectAdd, selectDel, setSelect } = result.current;
    act(() => {
      toggle(2);
    });
    expect(result.current.selected).toEqual([2]);
    expect(result.current.isSelected(2)).toEqual(true);
    act(() => {
      toggle(2);
    });
    expect(result.current.selected).toEqual([]);
    act(() => {
      selectAdd([2, 3]);
    });
    expect(result.current.selected).toEqual([2, 3]);
    act(() => {
      selectDel(2);
    });
    expect(result.current.selected).toEqual([3]);
    act(() => {
      selectDel([2, 3]);
    });
    expect(result.current.selected).toEqual([]);
    act(() => {
      setSelect([2, 3]);
    });
    expect(result.current.selected).toEqual([2, 3]);
    act(() => {
      setSelect(1);
    });
    expect(result.current.selected).toEqual([1]);
  });
  it("测试全选功能", () => {
    const { result } = renderHook(() => useSelections(lists));
    const { toggleAll } = result.current;
    act(() => {
      toggleAll();
    });
    expect(result.current.allSelected).toEqual(true);
    expect(result.current.selected).toEqual([1, 2, 3]);
  });
  it("测试反选功能", () => {
    const { result } = renderHook(() => useSelections(lists, [1, 2, 3]));
    const { toggleAll } = result.current;
    act(() => {
      toggleAll();
    });
    expect(result.current.allSelected).toEqual(false);
    expect(result.current.selected).toEqual([]);
  });
});
