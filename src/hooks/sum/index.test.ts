import sum from "./index";
describe("sum", () => {
  it("求和：1 + 2 = 3", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
