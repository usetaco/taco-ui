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
var SecondaryButton_1 = __importDefault(require("./SecondaryButton"));
var SaveButton_1 = __importDefault(require("./SaveButton"));
var TacoModal = function (_a) {
    var title = _a.title, body = _a.body, cancelText = _a.cancelText, confirmText = _a.confirmText, onConfirm = _a.onConfirm, isOpen = _a.isOpen, onClose = _a.onClose;
    return (React.createElement(react_1.Modal, { isOpen: isOpen, onClose: onClose, size: "lg" },
        React.createElement(react_1.ModalOverlay, null),
        React.createElement(react_1.ModalContent, null,
            React.createElement(react_1.ModalHeader, null, title),
            React.createElement(react_1.ModalCloseButton, null),
            React.createElement(react_1.ModalBody, null, body),
            React.createElement(react_1.ModalFooter, { justifyContent: "space-between" },
                React.createElement(SecondaryButton_1.default, { text: cancelText, onClick: onClose }),
                React.createElement(SaveButton_1.default, { text: confirmText, onClick: onConfirm })))));
};
exports.default = TacoModal;
//# sourceMappingURL=TacoModal.js.map