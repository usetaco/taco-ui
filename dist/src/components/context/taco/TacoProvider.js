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
exports.TacoContext = void 0;
var react_1 = __importStar(require("react"));
var ErrorProvider_1 = __importDefault(require("../error/ErrorProvider"));
var ApiProvider_1 = __importDefault(require("../api/ApiProvider"));
exports.TacoContext = (0, react_1.createContext)({});
var TacoProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    var _b = (0, react_1.useState)(), tacoTheme = _b[0], setTacoTheme = _b[1];
    (0, react_1.useEffect)(function () {
        setTacoTheme(theme);
    }, [theme]);
    return (react_1.default.createElement(exports.TacoContext.Provider, { value: {
            tacoTheme: tacoTheme,
            setTacoTheme: setTacoTheme,
        } },
        react_1.default.createElement(ApiProvider_1.default, null,
            react_1.default.createElement(ErrorProvider_1.default, null, children))));
};
exports.default = TacoProvider;
//# sourceMappingURL=TacoProvider.js.map