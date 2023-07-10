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
var TextField_1 = __importDefault(require("../form/TextField"));
var PrimaryButton_1 = __importDefault(require("../ui/PrimaryButton"));
var SecondaryButton_1 = __importDefault(require("../ui/SecondaryButton"));
var LoginForm = function (_a) {
    var title = _a.title, subtitle = _a.subtitle;
    var _b = React.useState(), email = _b[0], setEmail = _b[1];
    var _c = React.useState(), password = _c[0], setPassword = _c[1];
    var signIn = function () { };
    return (React.createElement("form", null,
        React.createElement(react_1.Flex, { direction: "column", gap: 3 },
            React.createElement(react_1.Text, { variant: "title" }, title || 'Login'),
            subtitle && React.createElement(react_1.Text, { variant: "subtitle" }, subtitle),
            React.createElement(TextField_1.default, { label: "Email Address", value: email, setValue: setEmail }),
            React.createElement(TextField_1.default, { label: "Password", value: password, setValue: setPassword }),
            React.createElement(PrimaryButton_1.default, { text: "Login", onClick: signIn }),
            React.createElement(react_1.Text, { variant: "subtitle" }, "or"),
            React.createElement(SecondaryButton_1.default, { text: "Forgot Password", onClick: signIn }))));
};
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map