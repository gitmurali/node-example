const { getNewUser, mapObjectToArray } = require("./utils");

describe("mapObject to array", () => {
  test("maps values to array", () => {
    const result = mapObjectToArray({ age: 35, height: 65 }, (k, v) => {
      return k + v;
    });

    expect(result).toEqual(["age35", "height65"]);
  });
});
