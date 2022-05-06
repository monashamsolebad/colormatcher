const sortFunction = require("./index");
describe("SortFunction", () => {
  it("should return empty when inputs are empty", () => {
    actual = sortFunction([], []);
    expected = [];
    expect(actual).toEqual(expected);
  });
  it("should return empty when inputs are not related", () => {
    actual = sortFunction(["blue"], ["red"]);
    expected = [];
    expect(actual).toEqual(expected);
  });
  it("should return undefined when inputs are undefined", () => {
    actual = sortFunction(undefined, undefined);
    expected = undefined;
    expect(actual).toEqual(expected);
  });
  it("should return null when inputs are null", () => {
    actual = sortFunction(null, null);
    expected = null;
    expect(actual).toEqual(expected);
  });
  it("should return items in order of the order array provided", () => {
    actual = sortFunction(
      ["blue", "red", "green", "blue"],
      ["red", "blue", "black"]
    );
    expected = ["red", "blue", "blue"];
    expect(actual).toEqual(expected);
  });
});
