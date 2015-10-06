var assert     = require("assert"),
    parseQuery = require("../");

function ExpectedError(regex) { this.regex = regex; }
ExpectedError.prototype.matches = function (err) {
  return this.regex.test(err.message);
};

describe("parseQuery", function() {
  [
    [
      "?sweet=true&name=cheesecake&slices=8&delicious&warm=false",
      {"sweet":true,"name":"cheesecake","slices":"8","delicious":true,"warm": false}
    ]
  ].forEach(function(test) {
    it("should parse " + test[0], function() {
      var parsed = parseQuery(test[0]);
      assert.deepEqual(parsed, test[1]);
    });
  });
});
