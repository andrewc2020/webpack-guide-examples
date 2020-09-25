"use strict";

var _App = require("./App");

describe('Local State', function () {
  it('should increment the counter in state', function () {
    var state = {
      counter: 0
    };
    var newState = (0, _App.doIncrement)(state);
    expect(newState.counter).to.equal(1);
  });
  it('should decrement the counter in state', function () {
    var state = {
      counter: 0
    };
    var newState = (0, _App.doDecrement)(state);
    expect(newState.counter).to.equal(-1);
  });
});