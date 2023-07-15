"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilterFromHex = exports.getLightOrDark = exports.changeShade = void 0;
var hex_to_css_filter_1 = require("hex-to-css-filter");
var changeShade = function (hexColor, magnitude) {
    hexColor = hexColor.replace("#", "");
    if (hexColor.length === 6) {
        var decimalColor = parseInt(hexColor, 16);
        var r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        var g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        var b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return "#".concat((g | (b << 8) | (r << 16)).toString(16));
    }
    else {
        return hexColor;
    }
};
exports.changeShade = changeShade;
function getLightOrDark(hexColor) {
    var rgbColor = hexToRgb(hexColor);
    if (rgbColor) {
        var hsp = Math.sqrt(0.299 * (rgbColor.r * rgbColor.r) +
            0.587 * (rgbColor.g * rgbColor.g) +
            0.114 * (rgbColor.b * rgbColor.b));
        if (hsp > 127.5) {
            return 'light';
        }
        else {
            return 'dark';
        }
    }
    return 'dark';
}
exports.getLightOrDark = getLightOrDark;
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}
function getFilterFromHex(hex) {
    return (0, hex_to_css_filter_1.hexToCSSFilter)(hex).filter;
}
exports.getFilterFromHex = getFilterFromHex;
//# sourceMappingURL=colors.js.map