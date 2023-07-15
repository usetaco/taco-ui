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
var framer_motion_1 = require("framer-motion");
var slideVariants = {
    enter: function (direction) {
        return {
            zIndex: 1,
            x: direction === 'left' ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: function (direction) {
        return {
            zIndex: 0,
            x: direction === 'right' ? 1000 : -1000,
            opacity: 0,
        };
    },
};
var SlideCarousel = function (_a) {
    var slides = _a.slides, currentSlide = _a.currentSlide, _b = _a.slideDirection, slideDirection = _b === void 0 ? 'left' : _b;
    return (React.createElement(framer_motion_1.AnimatePresence, { initial: false, custom: slideDirection }, slides &&
        slides.map(function (s, sdx) {
            if (currentSlide === sdx) {
                return (React.createElement(framer_motion_1.motion.div, { key: "panel-".concat(sdx), style: {
                        padding: '12px',
                        position: 'absolute',
                        width: '100%',
                        boxSizing: 'border-box',
                    }, custom: slideDirection, variants: slideVariants, initial: "enter", animate: "center", exit: "exit", transition: {
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    } }, s.body));
            }
        })));
};
exports.default = SlideCarousel;
//# sourceMappingURL=SlideCarousel.js.map