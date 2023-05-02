import { renderHook } from "@testing-library/react";
import useCss from ".";

describe("useCss", () => {
  it("should be defined", () => {
    expect(useCss).toBeDefined();
  });

  it("测试css", () => {
    const { result } = renderHook(() => useCss({ color: "red" }));
    expect(result.current).toBe("domesy-hooks-css-0");
  });
});
