const app = require("../multiply");
const assert = require("chai").assert;

describe("Checking if multiply() works properly", function () {
  //first test
  it("Checking for: 1*1 = 1", function () {
    let result = app.multiply(1, 1);
    assert.equal(result, 1);
  });

  //second test
  it("Checking for: 2*2 = 4", function () {
    let result = app.multiply(2, 2);
    assert.equal(result, 4);
  });

  //third test cycle
  it("Checking for: 3*3 = 9", function () {
    let result = app.multiply(3, 3);
    assert.equal(result, 9);
  });

  //fourth test cycle
  it("Checking for: 4*4 = 16", function () {
    let result = app.multiply(4, 4);
    assert.equal(result, 16);
  });

  //fifth test cycle
  it("Checking for: 23*45", function () {
    let result = app.multiply(23, 45);
    assert.equal(result, 23 * 45);
  });
});
