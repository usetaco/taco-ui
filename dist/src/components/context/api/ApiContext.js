"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ApiProvider_1 = require("./ApiProvider");
var useTacoApiClient = function () { return (0, react_1.useContext)(ApiProvider_1.ApiContext); };
exports.default = useTacoApiClient;
//# sourceMappingURL=ApiContext.js.map