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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("@chakra-ui/react");
var TextField_1 = __importDefault(require("../form/TextField"));
var PrimaryButton_1 = __importDefault(require("../ui/PrimaryButton"));
var SignupForm = function (_a) {
    var onError = _a.onError, onSubmit = _a.onSubmit, _b = _a.buttonText, buttonText = _b === void 0 ? 'Signup' : _b;
    var _c = React.useState(), email = _c[0], setEmail = _c[1];
    var _d = React.useState(), password = _d[0], setPassword = _d[1];
    var _e = React.useState(), passwordConfirm = _e[0], setPasswordConfirm = _e[1];
    var signUp = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!password ||
                password.length === 0 ||
                !passwordConfirm ||
                passwordConfirm.length === 0) {
                onError({
                    title: 'Invalid Password',
                    description: 'Please enter a valid password',
                });
            }
            else if (password !== passwordConfirm) {
                onError({
                    title: 'Invalid Password',
                    description: 'Password and Confirm Password do not match',
                });
            }
            else if (!email || email.length === 0) {
                onError({
                    title: 'Invalid Email',
                    description: 'Please enter a valid email',
                });
            }
            else {
                onSubmit(email, password, passwordConfirm);
            }
            return [2];
        });
    }); };
    return (React.createElement("form", null,
        React.createElement(react_1.Flex, { direction: "column", align: "center", gap: 4, width: "100%" },
            React.createElement(react_1.Flex, { direction: "column", align: "center", width: "50%", gap: 4 },
                React.createElement(TextField_1.default, { placeholder: "Email Address", value: email, setValue: setEmail }),
                React.createElement(TextField_1.default, { placeholder: "Password", type: "password", value: password, setValue: setPassword }),
                React.createElement(TextField_1.default, { placeholder: "Confirm Password", type: "password", value: passwordConfirm, setValue: setPasswordConfirm })),
            React.createElement(react_1.Flex, { direction: "column", align: "center", width: "50%", gap: 3 },
                React.createElement(PrimaryButton_1.default, { text: buttonText, onClick: signUp, disabled: (!email || email.length === 0) &&
                        (!password || password.length === 0) &&
                        (!passwordConfirm || passwordConfirm.length === 0) })))));
};
exports.default = SignupForm;
//# sourceMappingURL=SignupForm.js.map