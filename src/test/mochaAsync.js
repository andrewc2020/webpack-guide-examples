"use strict";
exports.__esModule = true;
exports.mochaAsync = void 0;
exports.mochaAsync = function (fn) {
    return function (done) {
        fn.call().then(done, function (err) { done(err); });
    };
};
