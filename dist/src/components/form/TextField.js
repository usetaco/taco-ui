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
var FieldLabel_1 = __importDefault(require("./FieldLabel"));
var TextField = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, label = _a.label, name = _a.name, desc = _a.desc, placeholder = _a.placeholder, value = _a.value, setValue = _a.setValue, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.required, required = _d === void 0 ? false : _d;
    return (React.createElement(react_1.FormControl, null,
        React.createElement(react_1.Flex, { direction: "column", gap: "8px" },
            label && (React.createElement(FieldLabel_1.default, { title: required ? "".concat(label, " *") : label, subTitle: desc })),
            React.createElement(react_1.Input, { type: type, name: name ? name : label, id: label, value: value || '', onChange: function (e) {
                    setValue(e.target.value);
                }, isDisabled: disabled, placeholder: placeholder ? placeholder : label, size: "md", variant: "outline", fontWeight: 400, fontFamily: "WorkSans, sans-serif", backgroundColor: "white", border: "1px solid #CED4DA", px: 3 }))));
};
exports.default = TextField;
//# sourceMappingURL=TextField.js.map