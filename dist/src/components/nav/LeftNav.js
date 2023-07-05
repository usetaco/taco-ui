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
var LeftNav = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b;
    return (React.createElement(react_1.Flex, { direction: "column", align: "start", minHeight: "100vh", height: "100%", width: "280px", pt: 6, backgroundColor: "#fff" }, menuItems.map(function (m, idx) {
        return (React.createElement(react_1.Link, { key: "left-nav-".concat(idx), p: 3, width: "100%", variant: "left", href: m.href, _hover: { backgroundColor: '#4b4b4b', color: 'white' }, display: "flex", alignItems: "center", gap: 3 },
            React.createElement(react_1.Image, { src: m.icon, width: "20px", height: "20px", _hover: { filter: "grayscale(100%)" } }),
            m.label));
    })));
};
exports.default = LeftNav;
//# sourceMappingURL=LeftNav.js.map