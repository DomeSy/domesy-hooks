import { renderHook, act } from "@testing-library/react";
import useNetwork from "./";

describe("useNetwork", () => {
  it("should be defined", () => {
    expect(useNetwork).toBeDefined();
  });

  it("切换网络状态", () => {
    const { result } = renderHook(() => useNetwork());
    expect(result.current.online).toBeTruthy();
    act(() => {
      window.dispatchEvent(new Event("offline")); //关闭
    });
    expect(result.current.online).toBeFalsy();
    act(() => {
      window.dispatchEvent(new Event("online")); //开启
    });
    expect(result.current.online).toBeTruthy();
  });
});
