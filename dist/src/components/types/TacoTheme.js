"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TacoTheme = void 0;
var react_1 = require("@chakra-ui/react");
var TacoTheme = (function () {
    function TacoTheme(primaryColor, secondaryColor, fontFamily, componentOverrides) {
        var _a, _b;
        this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.fontFamily = fontFamily;
        var newTheme = (0, react_1.extendTheme)({
            styles: {
                global: {
                    body: {
                        color: 'black',
                        fontWeight: 'normal',
                    },
                },
            },
            fonts: {
                heading: "".concat(fontFamily || 'WorkSans', ", ").concat((_a = react_1.theme.fonts) === null || _a === void 0 ? void 0 : _a.heading),
                body: "".concat(fontFamily || 'WorkSans', ", ").concat((_b = react_1.theme.fonts) === null || _b === void 0 ? void 0 : _b.body),
            },
            fontWeights: {
                light: 300,
                normal: 400,
                medium: 500,
                bold: 700,
            },
            sizes: __assign(__assign({}, react_1.theme.sizes), { container: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                } }),
            space: __assign(__assign({}, react_1.theme.space), { 0.5: '1px', 1: '2px', 1.5: '4px', 2: '6px', 2.5: '8px', 3: '12px', 3.5: '18px', 4: '24px', 5: '36px', 6: '48px', 7: '64px', 8: '72px', 9: '96px' }),
            colors: __assign(__assign({}, react_1.theme.colors), { primary: primaryColor || '#000', secondaryColor: secondaryColor || '#6C757D' }),
            components: {
                Text: {
                    baseStyle: {
                        fontFamily: "".concat(fontFamily || 'WorkSans', ", sans-serif"),
                        fontWeight: 400,
                    },
                    variants: {
                        title: {
                            fontSize: '28px',
                            fontWeight: 700,
                            lineHeight: '32px',
                        },
                        subtitle: {
                            fontSize: '18px',
                            fontWeight: 500,
                            lineHeight: '24px',
                        },
                        body: {
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '20px',
                        },
                        label: {
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '14px',
                            opacity: 0.75,
                            marginBottom: '5px',
                        },
                        callout: {
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '16px',
                            opacity: 0.75,
                        },
                    },
                },
                Link: {
                    baseStyle: {
                        fontFamily: "".concat(fontFamily || 'WorkSans', ", sans-serif"),
                        fontWeight: 400,
                        fontSize: '16px',
                    },
                    variants: {
                        menu: {
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '18px',
                        },
                        body: {
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '16px',
                            textDecoration: 'underline',
                        },
                    },
                },
            },
        });
        if (componentOverrides) {
            this.chakraTheme.components = __assign(__assign({}, this.chakraTheme.components), componentOverrides);
        }
        this.chakraTheme = newTheme;
    }
    return TacoTheme;
}());
exports.TacoTheme = TacoTheme;
//# sourceMappingURL=TacoTheme.js.map