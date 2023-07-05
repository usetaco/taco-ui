"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@chakra-ui/react");
var BasicCell = function (_a) {
    var text = _a.text, _b = _a.rightAlign, rightAlign = _b === void 0 ? false : _b, rest = __rest(_a, ["text", "rightAlign"]);
    return (React.createElement(react_1.GridItem, __assign({ borderBottom: "1px solid #f2f2f2", py: 3 }, rest),
        React.createElement(react_1.Text, { variant: "body", textAlign: rightAlign ? 'right' : 'left' }, text)));
};
var BasicTable = function (_a) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? [] : _c, _d = _a.justify, justify = _d === void 0 ? 'right' : _d;
    return (React.createElement(react_1.Flex, { direction: "column", gap: 2 },
        React.createElement(react_1.Grid, { templateColumns: '60% 20% 20%', px: 3 }, columns.map(function (c, cx) {
            return (React.createElement(react_1.GridItem, { key: "header-".concat(cx) },
                React.createElement(react_1.Text, { variant: "body-light", textAlign: justify === 'right' && cx > 0 ? 'right' : 'left' }, c.label)));
        })),
        React.createElement(react_1.Grid, { templateColumns: '60% 20% 20%', py: 3, px: 4, as: react_1.Card }, data.map(function (d, dx) {
            return columns.map(function (c, cx) {
                return (React.createElement(react_1.GridItem, { key: "header-".concat(cx) },
                    React.createElement(BasicCell, { key: "cell-".concat(dx), text: d[c.fieldName], rightAlign: justify === 'right' && cx > 0 })));
            });
        }))));
};
exports.default = BasicTable;
//# sourceMappingURL=BasicTable.js.map