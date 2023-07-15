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
var LoginForm = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = React.useState(), email = _b[0], setEmail = _b[1];
    var _c = React.useState(), password = _c[0], setPassword = _c[1];
    var login = function () {
        if (email && password) {
            onSubmit(email, password);
        }
    };
    return (React.createElement("form", null,
        React.createElement(react_1.Flex, { direction: "column", align: "center", gap: 4, width: "100%" },
            React.createElement(react_1.Flex, { direction: "column", align: "center", width: "50%", gap: 4 },
                React.createElement(TextField_1.default, { placeholder: "Email Address", value: email, setValue: setEmail, name: "email" }),
                React.createElement(TextField_1.default, { placeholder: "Password", type: "password", value: password, setValue: setPassword, name: "password" })),
            React.createElement(react_1.Flex, { direction: "column", align: "center", width: "50%", gap: 3 },
                React.createElement(PrimaryButton_1.default, { text: "Login", type: "submit", onClick: login, disabled: (!email || email.length === 0) &&
                        (!password || password.length === 0) })))));
};
exports.default = LoginForm;
//# sourceMappingURL=LoginForm.js.map