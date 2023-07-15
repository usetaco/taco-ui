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
var colors_1 = require("../util/colors");
var PrimaryButton = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#000' : _b, _c = _a.type, type = _c === void 0 ? 'button' : _c, text = _a.text, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, onClick = _a.onClick, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.loading, loading = _f === void 0 ? false : _f;
    var hoverColor;
    var fontColor;
    var fontLightOrDark = (0, colors_1.getLightOrDark)(color);
    if (fontLightOrDark === 'light') {
        fontColor = '#000';
        hoverColor = (0, colors_1.changeShade)(color, -30);
    }
    else {
        fontColor = '#fff';
        hoverColor = (0, colors_1.changeShade)(color, 30);
    }
    return (React.createElement(react_1.Button, { backgroundColor: color, color: fontColor, type: type, fontWeight: 400, _hover: { backgroundColor: hoverColor, color: fontColor }, onClick: onClick, isDisabled: disabled, isLoading: loading, width: fullWidth ? '100%' : 'auto' }, text));
};
exports.default = PrimaryButton;
//# sourceMappingURL=PrimaryButton.js.map