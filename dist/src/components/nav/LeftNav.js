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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@chakra-ui/react");
var SecondaryButton_1 = __importDefault(require("../ui/SecondaryButton"));
var LeftNav = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b, _c = _a.showLogout, showLogout = _c === void 0 ? false : _c, logoutOnClick = _a.logoutOnClick;
    return (React.createElement(react_1.Flex, { direction: "column", align: "start", justify: "space-between", minHeight: "100vh", height: "100%", width: "280px", pt: 7, backgroundColor: "#fff", sx: { position: 'relative !important' } },
        React.createElement(react_1.Flex, { direction: "column", width: "100%" }, menuItems.map(function (m, idx) {
            return (React.createElement(react_1.Link, { key: "left-nav-".concat(idx), p: 3, width: "100%", variant: "left", href: m.href, _hover: { backgroundColor: '#a3a3a3', color: 'white' }, display: "flex", alignItems: "center", gap: 3 },
                React.createElement(react_1.Image, { src: m.icon, width: "20px", height: "20px", _hover: { filter: "grayscale(100%)" } }),
                m.label));
        })),
        showLogout && (React.createElement(react_1.Flex, { width: "100%", p: 3, justify: "center", position: "absolute", bottom: 2, left: 0 },
            React.createElement(SecondaryButton_1.default, { fullWidth: true, text: React.createElement(react_1.Flex, { align: "center", gap: 3 },
                    React.createElement("svg", { width: "21", height: "20", viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "M8 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V4.16667C3 3.72464 3.17559 3.30072 3.48816 2.98816C3.80072 2.67559 4.22464 2.5 4.66667 2.5H8", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        React.createElement("path", { d: "M13.8335 14.1666L18.0002 9.99998L13.8335 5.83331", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        React.createElement("path", { d: "M18 10H8", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
                    React.createElement(react_1.Text, { fontSize: "14px", fontWeight: 500, color: "#fff" }, "Logout")), onClick: logoutOnClick })))));
};
exports.default = LeftNav;
//# sourceMappingURL=LeftNav.js.map