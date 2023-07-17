"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@chakra-ui/react");
var PageLayout = function (_a) {
    var children = _a.children, _b = _a.loading, loading = _b === void 0 ? false : _b;
    return (React.createElement(react_1.Grid, { width: "100vw", templateColumns: "1fr", minHeight: "100vh", backgroundColor: "#f4f4f4", py: 5 }, loading ? (React.createElement(react_1.GridItem, null,
        React.createElement(react_1.Flex, { height: "80vh", width: "100%", align: "center", justify: "center" },
            React.createElement(react_1.CircularProgress, { isIndeterminate: true, size: "100px", thickness: "6px", color: "primary" })))) : (React.createElement(react_1.GridItem, null, children))));
};
exports.default = PageLayout;
//# sourceMappingURL=PageLayout.js.map