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
var NavBar = function (_a) {
    var _b = _a.logoPath, logoPath = _b === void 0 ? '/logo.png' : _b, navMenu = _a.navMenu, onClick = _a.onClick;
    return (React.createElement(react_1.Flex, { position: "fixed", align: "center", justify: "space-between", width: "100%", py: 2.5, px: 4, backgroundColor: "#fff", zIndex: 999 },
        React.createElement(react_1.Image, { src: logoPath, width: "auto", height: "auto", maxHeight: "35px", _hover: { cursor: 'pointer' }, onClick: onClick }),
        navMenu && navMenu));
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map