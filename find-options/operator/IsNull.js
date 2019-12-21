"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FindOperator_1 = require("../FindOperator");
/**
 * Find Options Operator.
 * Example: { someField: IsNull() }
 */
function IsNull() {
    return new FindOperator_1.FindOperator("isNull", undefined, false);
}
exports.IsNull = IsNull;
//# sourceMappingURL=IsNull.js.map