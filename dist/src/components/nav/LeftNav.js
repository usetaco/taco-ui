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
var TacoImage_1 = __importDefault(require("../ui/TacoImage"));
var icons_1 = require("@chakra-ui/icons");
var framer_motion_1 = require("framer-motion");
var navVariants = {
    open: {
        width: 300,
        transition: {
            duration: 0.1,
        },
    },
    closed: {
        width: 60,
        transition: {
            duration: 0.1,
        },
    },
};
var LeftNav = function (_a) {
    var _b = _a.menuItems, menuItems = _b === void 0 ? [] : _b, _c = _a.showLogout, showLogout = _c === void 0 ? false : _c, logoutOnClick = _a.logoutOnClick;
    var _d = React.useState(true), menuOpen = _d[0], setMenuOpen = _d[1];
    var _e = React.useState({}), menusOpen = _e[0], setMenusOpen = _e[1];
    React.useEffect(function () {
        var newMenusOpen = {};
        menuItems.forEach(function (m, idx) {
            newMenusOpen[idx] = false;
        });
        setMenusOpen(newMenusOpen);
    }, [menuItems]);
    return (React.createElement(react_1.Box, { sx: { position: 'fixed !important', left: 0, top: 0 } },
        React.createElement(react_1.Flex, { as: framer_motion_1.motion.div, variants: navVariants, initial: menuOpen ? 'open' : 'closed', animate: menuOpen ? 'open' : 'closed', height: "100vh", direction: "column", align: "end", justifyContent: "space-between", padding: 3, pt: 8, backgroundColor: "#fff", boxShadow: "md" },
            React.createElement(react_1.Flex, { width: "100%", direction: "column" }, menuItems.map(function (m, idx) {
                return (React.createElement(react_1.Box, { key: "menu-".concat(idx) },
                    React.createElement(react_1.Button, { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", variant: "ghost", padding: "8px", onClick: function () {
                            if (m.subItems && m.subItems.length > 0) {
                                var newMenusOpen = menusOpen;
                                newMenusOpen[idx] = !menusOpen[idx];
                                setMenusOpen(newMenusOpen);
                            }
                            else {
                                m.onClick && m.onClick();
                            }
                        } },
                        React.createElement(react_1.Flex, { align: "center", gap: 3 },
                            m.icon && (React.createElement(TacoImage_1.default, { src: m.icon, width: "20px", height: "20px", _hover: { filter: "grayscale(100%)" } })),
                            menuOpen && React.createElement(react_1.Text, { variant: "subtitle" }, m.label)),
                        m.subItems && m.subItems.length > 0 && menuOpen && (React.createElement(icons_1.ChevronDownIcon, { transform: menusOpen[idx] ? 'rotate(0deg)' : 'rotate(180deg)', transition: "200ms all ease" }))),
                    m.subItems && m.subItems.length > 0 && (React.createElement(react_1.Collapse, { in: menusOpen[idx], animateOpacity: true },
                        React.createElement(react_1.Flex, { direction: "column", gap: "8px", padding: "6px 12px" }, m.subItems.map(function (s) {
                            return (React.createElement(react_1.Link, { key: s.href, href: s.href, variant: "menu" }, s.label));
                        }))))));
            })),
            showLogout && (React.createElement(react_1.Flex, { width: "100%", p: 3, justify: "center", position: "absolute", bottom: 2, left: 0 },
                React.createElement(SecondaryButton_1.default, { fullWidth: true, text: React.createElement(react_1.Flex, { align: "center", gap: 3 },
                        React.createElement("svg", { width: "21", height: "20", viewBox: "0 0 21 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                            React.createElement("path", { d: "M8 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V4.16667C3 3.72464 3.17559 3.30072 3.48816 2.98816C3.80072 2.67559 4.22464 2.5 4.66667 2.5H8", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            React.createElement("path", { d: "M13.8335 14.1666L18.0002 9.99998L13.8335 5.83331", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                            React.createElement("path", { d: "M18 10H8", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
                        React.createElement(react_1.Text, { fontSize: "14px", fontWeight: 500, color: "#fff" }, "Logout")), onClick: function () {
                        logoutOnClick && logoutOnClick;
                    } }))),
            React.createElement(react_1.IconButton, { "aria-label": "toggle menu", size: "sm", onClick: function () {
                    setMenuOpen(!menuOpen);
                } },
                React.createElement(icons_1.ChevronRightIcon, { transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: "200ms all ease" })))));
};
exports.default = LeftNav;
//# sourceMappingURL=LeftNav.js.map