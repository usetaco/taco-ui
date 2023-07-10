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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var tacoTheme = (0, react_1.extendTheme)({
    styles: {
        global: {
            body: {
                color: 'black',
                fontWeight: 'normal',
            },
        },
    },
    fonts: {
        heading: "WorkSans, ".concat((_a = react_1.theme.fonts) === null || _a === void 0 ? void 0 : _a.heading),
        body: "WorkSans, ".concat((_b = react_1.theme.fonts) === null || _b === void 0 ? void 0 : _b.body),
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
    space: __assign(__assign({}, react_1.theme.space), { 0.5: '1px', 1: '2px', 1.5: '4px', 2: '6px', 2.5: '8px', 3: '12px', 3.5: '18px', 4: '24px', 5: '36px', 6: '48px', 7: '64px', 8: '72px' }),
    components: {
        Text: {
            baseStyle: {
                fontFamily: 'WorkSans, sans-serif',
            },
            variants: {
                title: {
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '30px',
                },
                subtitle: {
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '18px',
                },
                body: {
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '18px',
                },
                'body-sm': {
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '18px',
                    opacity: 0.5,
                },
                'body-lg': {
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '36px',
                },
                label: {
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '12px',
                    opacity: 0.6,
                    marginBottom: '5px',
                },
            },
        },
        Link: {
            baseStyle: {
                fontFamily: 'WorkSans, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
            },
            variants: {
                menu: {
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: '18px',
                },
            },
        },
    },
});
exports.default = tacoTheme;
//# sourceMappingURL=TacoTheme.js.map