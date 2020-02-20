const balanceAngles = require("./index.js");

test("<>", () => {
  expect(balanceAngles("<>")).toBe("<>");
});

test("<", () => {
  expect(balanceAngles("<")).toBe("<>");
});

test(">", () => {
  expect(balanceAngles(">")).toBe("<>");
});

test(">>>", () => {
  expect(balanceAngles(">>>")).toBe("<<<>>>");
});

test("><<><", () => {
  expect(balanceAngles("><<><")).toBe("<><<><>>");
});

test("<<>>>>><<<>>", () => {
  expect(balanceAngles("<<>>>>><<<>>")).toBe("<<<<<>>>>><<<>>>");
});
