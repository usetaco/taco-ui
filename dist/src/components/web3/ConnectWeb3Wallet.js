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
var react_1 = require("@web3modal/react");
var ConnectWeb3Wallet = function (_a) {
    var projectId = _a.projectId, ethereumClient = _a.ethereumClient, opener = _a.opener, onSuccess = _a.onSuccess;
    var _b = (0, react_1.useWeb3Modal)(), open = _b.open, close = _b.close;
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { onClick: function () { return open(); } }, opener),
        React.createElement(react_1.Web3Modal, { projectId: projectId, ethereumClient: ethereumClient })));
};
exports.default = ConnectWeb3Wallet;
//# sourceMappingURL=ConnectWeb3Wallet.js.map