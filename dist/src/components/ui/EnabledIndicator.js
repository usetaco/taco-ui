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
var EnabledIndicator = function (_a) {
    var enabled = _a.enabled, statusText = _a.statusText;
    return (React.createElement(react_1.Flex, { align: "center", gap: "5px" },
        React.createElement(react_1.Box, { height: "20px", width: "20px", backgroundColor: enabled ? '#11D400' : '#CECECE', borderRadius: "50%" }),
        React.createElement(react_1.Text, { fontSize: "16px", fontWeight: 400, color: enabled ? '#000' : '#636363' }, statusText && statusText.length > 0
            ? statusText
            : enabled
                ? 'Active'
                : 'Disabled')));
};
exports.default = EnabledIndicator;
//# sourceMappingURL=EnabledIndicator.js.map