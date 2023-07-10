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
exports.ErrorContext = void 0;
var react_1 = __importStar(require("react"));
var react_2 = require("@chakra-ui/react");
exports.ErrorContext = (0, react_1.createContext)({});
var TacoErrorProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(undefined), error = _b[0], setError = _b[1];
    var toast = (0, react_2.useToast)();
    (0, react_1.useEffect)(function () {
        if (error && error.errorCode > 0) {
            toast({
                title: error.errorTitle,
                description: error.errorMessage,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }, [error]);
    return (react_1.default.createElement(exports.ErrorContext.Provider, { value: {
            error: error,
            setError: setError,
        } }, children));
};
exports.default = TacoErrorProvider;
//# sourceMappingURL=ErrorProvider.js.map