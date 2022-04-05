const { getNewUser, mapObjectToArray } = require("./utils");

describe("mapObject to array", () => {
  test("maps values to array", () => {
    const result = mapObjectToArray({ age: 35, height: 65 }, (k, v) => {
      return k + v;
    });

    expect(result).toEqual(["age35", "height65"]);
  });

  test("callback gets called", () => {
    const mockCb = jest.fn();
    const result = mapObjectToArray({ age: 35, height: 65 }, mockCb);

    expect(mockCb.mock.calls.length).toBe(2);
  });
});

describe("getNewUser", () => {
  test("it get user", async () => {
    const user = await getNewUser(1);

    expect(user).toBeTruthy();
  });
});
