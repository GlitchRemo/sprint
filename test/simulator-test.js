const {run} = require("../src/simulator.js");
const {describe, it} = require("node:test");
const  {strictEqual} = require("assert");

describe("sprint simulator", function() {
  it("should give 5 for addition of 2 and 3", function() {
    strictEqual(run(), 5);
  });
});


