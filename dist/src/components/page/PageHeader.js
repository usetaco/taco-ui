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
var PageHeader = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, button = _a.button, _b = _a.showBorder, showBorder = _b === void 0 ? false : _b;
    return (React.createElement(react_1.Flex, { align: "center", justify: "space-between", width: "100%", mb: 4, pb: showBorder ? 3 : 0, borderBottom: showBorder ? '1px solid #e1e1e1' : 'none' },
        React.createElement(react_1.Flex, { direction: "column", gap: 2 },
            React.createElement(react_1.Text, { variant: "title" }, title),
            subtitle && React.createElement(react_1.Text, { variant: "subtitle" }, subtitle)),
        button && button));
};
exports.default = PageHeader;
//# sourceMappingURL=PageHeader.js.map