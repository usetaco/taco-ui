"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ErrorProvider_1 = require("./ErrorProvider");
var useTacoError = function () { return (0, react_1.useContext)(ErrorProvider_1.ErrorContext); };
exports.default = useTacoError;
//# sourceMappingURL=ErrorContext.js.map