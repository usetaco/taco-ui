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
var text_mask_addons_1 = require("text-mask-addons");
var react_text_mask_1 = __importDefault(require("react-text-mask"));
var CurrencyField = function (_a) {
    var label = _a.label, desc = _a.desc, placeholder = _a.placeholder, value = _a.value, setValue = _a.setValue, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (React.createElement(react_1.FormControl, null,
        React.createElement(react_1.Flex, { direction: "column", gap: "8px" },
            label && React.createElement(FieldLabel_1.default, { title: label, subTitle: desc }),
            React.createElement(react_1.InputGroup, null,
                React.createElement(react_1.InputLeftElement, { pointerEvents: "none" }, "$"),
                React.createElement(react_1.Input, { as: react_text_mask_1.default, mask: (0, text_mask_addons_1.createNumberMask)({
                        prefix: '',
                        suffix: '',
                        includeThousandsSeparator: true,
                        thousandsSeparatorSymbol: ',',
                        allowDecimal: false,
                        allowNegative: false,
                        allowLeadingZeroes: false,
                    }), placeholder: placeholder, isDisabled: disabled, value: value || '', onChange: function (e) {
                        setValue(e.target.value);
                    } })))));
};
exports.default = CurrencyField;
//# sourceMappingURL=CurrencyField.js.map