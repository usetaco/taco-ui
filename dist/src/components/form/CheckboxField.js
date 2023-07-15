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
var CheckboxField = function (_a) {
    var label = _a.label, value = _a.value, setValue = _a.setValue, _b = _a.size, size = _b === void 0 ? 'lg' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.required, required = _d === void 0 ? false : _d;
    return (React.createElement(react_1.FormControl, null,
        React.createElement(react_1.Checkbox, { size: size, colorScheme: "green", borderColor: "#6C757D", isChecked: value || false, onChange: function (e) {
                setValue(e.target.checked);
            }, isDisabled: disabled, isInvalid: value !== undefined && required }, label)));
};
exports.default = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map