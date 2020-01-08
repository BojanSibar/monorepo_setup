const _ = require("lodash");
const commonFn = require("rakun_common");

const testArray = [1, 2, 3, 4, [5, 6]];

commonFn(`AutoTune with array ${_.flatten(testArray).join(",")}`);
