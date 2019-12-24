const _ = require("lodash");
const commonFn = require("@wrkflow/common");

const testArray = [1, 2, 3];
const testValue = 4;

const concat = _.concat(testArray, testValue, 5);

commonFn(`ShakeSpeare ${concat.join(",")}`);
