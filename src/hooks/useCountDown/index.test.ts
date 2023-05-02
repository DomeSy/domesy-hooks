import { renderHook, act } from "@testing-library/react";
import useCountDown from ".";
describe("useCountDown", () => {
  it("should be defined", () => {
    expect(useCountDown).toBeDefined();
  });

  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2020-01-01").getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("测试时间", () => {
    const { result } = renderHook(() =>
      useCountDown({
        targetDate: Date.now() + 3000,
      })
    );
    const [count, formattedRes] = result.current;
    expect(count).toBe(3000);
    expect(formattedRes.days).toBe(0);
    expect(formattedRes.hours).toBe(0);
    expect(formattedRes.minutes).toBe(0);
    expect(formattedRes.seconds).toBe(3);
    expect(formattedRes.milliseconds).toBe(0);
  });

  it("不存在默认值", () => {
    const { result } = renderHook(() => useCountDown());
    const [count, formattedRes] = result.current;
    expect(count).toBe(0);
    expect(formattedRes.days).toBe(0);
    expect(formattedRes.hours).toBe(0);
    expect(formattedRes.minutes).toBe(0);
  });

  it("测试 targetTime", () => {
    const onEnd = jest.fn();
    const { result, rerender } = renderHook(
      (
        props: any = {
          targetTime: 3000,
          onEnd,
        }
      ) => useCountDown(props)
    );
    expect(result.current[0]).toBe(3000);
    expect(result.current[1].seconds).toBe(3);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current[0]).toBe(2000);
    expect(result.current[1].seconds).toBe(2);
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(result.current[0]).toBe(0);
    expect(onEnd).toBeCalled();

    rerender({
      targetTime: 0,
    });
    expect(result.current[0]).toBe(0);
    expect(result.current[1].seconds).toBe(0);
  });

  it("测试 targetTime 为负数", () => {
    const { result } = renderHook(() =>
      useCountDown({
        targetTime: -5 * 1000,
      })
    );
    expect(result.current[0]).toBe(0);
  });

  it("测试 targetDate 当前现在时间", () => {
    const { result } = renderHook(() =>
      useCountDown({
        // targetDate: new Date("2021-01-01").getTime(),
        targetDate: new Date("2019-01-01").getTime(),
      })
    );
    expect(result.current[0]).toBe(0);
  });
});
