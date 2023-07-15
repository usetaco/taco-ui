import { hexToCSSFilter } from 'hex-to-css-filter';

export const changeShade = (hexColor: any, magnitude: any) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

export function getLightOrDark(hexColor: string) {
  let rgbColor = hexToRgb(hexColor);

  if (rgbColor) {
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    let hsp = Math.sqrt(
      0.299 * (rgbColor.r * rgbColor.r) +
        0.587 * (rgbColor.g * rgbColor.g) +
        0.114 * (rgbColor.b * rgbColor.b)
    );

    if (hsp > 127.5) {
      return 'light';
    } else {
      return 'dark';
    }
  }
  return 'dark';
}

function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
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

export function getFilterFromHex(hex: string) {
  return hexToCSSFilter(hex).filter;
}
