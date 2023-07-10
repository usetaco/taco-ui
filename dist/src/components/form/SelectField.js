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
var icons_1 = require("@chakra-ui/icons");
var SelectField = function (_a) {
    var label = _a.label, value = _a.value, setValue = _a.setValue, _b = _a.disabled, disabled = _b === void 0 ? false : _b, options = _a.options;
    var _c = (0, react_1.useDisclosure)(), isOpen = _c.isOpen, onToggle = _c.onToggle, onClose = _c.onClose;
    var _d = React.useState(), selectedOption = _d[0], setSelectedOption = _d[1];
    React.useEffect(function () {
        var foundOption = options.find(function (o) {
            return o.value === value;
        });
        if (foundOption) {
            setSelectedOption(foundOption);
        }
    }, [value]);
    return (React.createElement(react_1.FormControl, null,
        label && React.createElement(FieldLabel_1.default, { title: label }),
        React.createElement(react_1.Menu, { matchWidth: true }, function (_a) {
            var isOpen = _a.isOpen;
            return (React.createElement(React.Fragment, null,
                React.createElement(react_1.MenuButton, { as: react_1.Box, border: "1px solid #e2e8f0", backgroundColor: "white", px: 3, py: 2, borderRadius: "md", _hover: { cursor: 'pointer' } },
                    React.createElement(react_1.Flex, { justify: "space-between", align: "center", width: "100%" },
                        React.createElement(react_1.Text, { variant: "app-body" }, (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value)
                            ? selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label
                            : options[0].label),
                        React.createElement(icons_1.ChevronDownIcon, { transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: "200ms all ease" }))),
                React.createElement(react_1.MenuList, { maxHeight: "300px", overflowY: "scroll", borderWidth: "1px" }, options &&
                    options.map(function (o) {
                        return (React.createElement(react_1.MenuItem, { key: o.value, onClick: function () {
                                setValue(o.value);
                                onClose();
                            }, sx: {
                                display: 'flex',
                                alignItems: 'center',
                            } },
                            React.createElement(react_1.Text, { variant: "app-body", ml: "12px" }, o.label)));
                    }))));
        })));
};
exports.default = SelectField;
//# sourceMappingURL=SelectField.js.map