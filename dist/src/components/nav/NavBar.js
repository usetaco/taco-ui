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
    var _b = _a.logoPath, logoPath = _b === void 0 ? '/logo.png' : _b, _c = _a.showAuth, showAuth = _c === void 0 ? false : _c, authNav = _a.authNav, onClick = _a.onClick;
    return (React.createElement(react_1.Flex, { position: "fixed", align: "center", justify: "space-between", width: "100%", padding: 3, pr: 4, backgroundColor: "#fff", zIndex: 999 },
        React.createElement(react_1.Image, { src: logoPath, width: "200px", height: "auto", _hover: { cursor: 'pointer' }, onClick: onClick }),
        showAuth ? (React.createElement(React.Fragment, null, authNav && authNav)) : (React.createElement(react_1.Flex, { align: "center", gap: 4 },
            React.createElement(react_1.Link, { variant: "menu", href: "/login" }, "Login"),
            React.createElement(react_1.Link, { variant: "menu", href: "/signup" }, "Signup")))));
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map