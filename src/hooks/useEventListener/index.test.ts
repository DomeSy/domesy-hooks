import { renderHook } from "@testing-library/react";
import useEventListener from "./";

describe("useEventListener", () => {
  it("should be defined", () => {
    expect(useEventListener).toBeDefined();
  });

  let container: HTMLDivElement;
  let contain: HTMLDivElement;
  let containerRef: any;

  beforeEach(() => {
    container = document.createElement("div"); // 创建一个div
    document.body.appendChild(container);
    contain = document.createElement("div");
    document.body.appendChild(contain);
    containerRef = {
      current: {},
    };
  });

  afterEach(() => {
    document.body.removeChild(container); // 卸载
    document.body.removeChild(contain);
  });

  it("测试监听点击事件", async () => {
    let count: number = 0;
    const onClick = () => {
      count++;
    };
    const { rerender, unmount } = renderHook(() =>
      useEventListener("click", onClick, container)
    );

    document.body.click(); // 点击 document应该无效
    expect(count).toEqual(0);
    container.click(); // 点击 。-5*929container count + 1
    expect(count).toEqual(1);
    rerender(); // 重新渲染
    container.click(); // 点击 container count + 1
    expect(count).toEqual(2);
    unmount(); // 卸载
    container.click(); // 点击 container 应该无效
    expect(count).toEqual(2);
  });

  it("测试监听点击事件", async () => {
    let count: number = 0;
    const onClick = () => {
      count++;
    };
    renderHook(() => useEventListener("click", onClick, containerRef));

    document.body.click();
    expect(count).toEqual(0);
  });

  it("测试全局监听点击事件", async () => {
    let count: number = 0;
    const onClick = () => {
      count++;
    };
    const { rerender, unmount } = renderHook(() =>
      useEventListener("click", onClick)
    );

    document.body.click();
    expect(count).toEqual(1);
    container.click();
    expect(count).toEqual(2);
    rerender();
    container.click();
    expect(count).toEqual(3);
    unmount();
    container.click();
    expect(count).toEqual(3);
  });
});
