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
var react_1 = require("@chakra-ui/react");
var StepComplete = function () {
    return (React.createElement(react_1.Box, { position: "relative", width: "28px", height: "28px" },
        React.createElement(react_1.Box, { position: "absolute", top: "3px", left: "5px" },
            React.createElement("svg", { width: "23", height: "17", viewBox: "0 0 23 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M22.6929 0.312079C22.7902 0.410755 22.8675 0.527976 22.9202 0.657031C22.9729 0.786086 23 0.924437 23 1.06416C23 1.20389 22.9729 1.34224 22.9202 1.47129C22.8675 1.60035 22.7902 1.71757 22.6929 1.81624L8.05857 16.6879C7.96147 16.7868 7.84611 16.8653 7.71912 16.9189C7.59212 16.9724 7.45598 17 7.31849 17C7.18099 17 7.04485 16.9724 6.91785 16.9189C6.79086 16.8653 6.67551 16.7868 6.57841 16.6879L0.306551 10.3143C0.209362 10.2156 0.132268 10.0983 0.07967 9.96929C0.027072 9.84024 1.02405e-09 9.70194 0 9.56226C-1.02405e-09 9.42259 0.027072 9.28428 0.07967 9.15524C0.132268 9.0262 0.209362 8.90895 0.306551 8.81018C0.40374 8.71142 0.519119 8.63307 0.646102 8.57962C0.773085 8.52617 0.909185 8.49866 1.04663 8.49866C1.18408 8.49866 1.32018 8.52617 1.44716 8.57962C1.57414 8.63307 1.68952 8.71142 1.78671 8.81018L7.31849 14.4338L21.2127 0.312079C21.3098 0.213155 21.4252 0.134669 21.5522 0.0811171C21.6792 0.0275654 21.8153 0 21.9528 0C22.0903 0 22.2265 0.0275654 22.3535 0.0811171C22.4804 0.134669 22.5958 0.213155 22.6929 0.312079Z", fill: "#28A745" }))),
        React.createElement(react_1.Box, { position: "absolute" },
            React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14 2.15566C11.6571 2.15566 9.36673 2.85043 7.41864 4.1521C5.47055 5.45377 3.95221 7.30388 3.0556 9.46848C2.15899 11.6331 1.9244 14.0149 2.38148 16.3129C2.83857 18.6108 3.96681 20.7216 5.62352 22.3783C7.28023 24.035 9.39101 25.1632 11.6889 25.6203C13.9869 26.0774 16.3687 25.8428 18.5333 24.9462C20.6979 24.0496 22.548 22.5313 23.8497 20.5832C25.1514 18.6351 25.8462 16.3448 25.8462 14.0018C25.8462 13.7162 25.9596 13.4423 26.1616 13.2403C26.3635 13.0383 26.6375 12.9249 26.9231 12.9249C27.2087 12.9249 27.4826 13.0383 27.6846 13.2403C27.8865 13.4423 28 13.7162 28 14.0018C27.9996 17.0836 26.9823 20.0792 25.106 22.5239C23.2296 24.9687 20.599 26.726 17.6222 27.5233C14.6453 28.3207 11.4885 28.1135 8.64141 26.9339C5.79429 25.7543 3.41594 23.6682 1.87521 20.9992C0.334485 18.3302 -0.282523 15.2274 0.11988 12.172C0.522282 9.11656 1.92161 6.27929 4.10084 4.1002C6.28007 1.92111 9.11743 0.521969 12.1729 0.119762C15.2283 -0.282444 18.3311 0.334762 21 1.87566C21.1287 1.94299 21.2425 2.03565 21.3344 2.14807C21.4264 2.2605 21.4946 2.39036 21.5351 2.52985C21.5756 2.66934 21.5874 2.81558 21.5699 2.95976C21.5524 3.10395 21.5059 3.2431 21.4332 3.36885C21.3605 3.49459 21.2631 3.60434 21.1469 3.69148C21.0307 3.77862 20.8981 3.84135 20.757 3.87591C20.616 3.91046 20.4694 3.91612 20.326 3.89255C20.1827 3.86898 20.0457 3.81666 19.9231 3.73874C18.123 2.69776 16.0795 2.15159 14 2.15566Z", fill: "#28A745" })))));
};
var StepProgress = function (_a) {
    var title = _a.title, currentStep = _a.currentStep, stepLabels = _a.stepLabels;
    return (React.createElement(react_1.Flex, { direction: "column", gap: 5 },
        React.createElement(react_1.Flex, { direction: "column", gap: 3 },
            React.createElement(react_1.Text, { variant: "title" }, title),
            React.createElement(react_1.Progress, { hasStripe: true, value: Math.round((currentStep / stepLabels.length) * 100), borderRadius: "6px", colorScheme: "green" }),
            React.createElement(react_1.Text, { variant: "label" }, "".concat(currentStep, " of ").concat(stepLabels.length, " steps complete"))),
        React.createElement(react_1.Flex, { direction: "column", gap: 3 }, stepLabels.map(function (s, idx) {
            return (React.createElement(react_1.Flex, { align: "center", gap: 3 },
                idx < currentStep ? (React.createElement(StepComplete, null)) : (React.createElement(React.Fragment, null, idx === currentStep ? (React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14 2.15566C11.6571 2.15566 9.36673 2.85043 7.41864 4.1521C5.47055 5.45377 3.95221 7.30388 3.0556 9.46848C2.15899 11.6331 1.9244 14.0149 2.38148 16.3129C2.83857 18.6108 3.96681 20.7216 5.62352 22.3783C7.28023 24.035 9.39101 25.1632 11.6889 25.6203C13.9869 26.0774 16.3687 25.8428 18.5333 24.9462C20.6979 24.0496 22.548 22.5313 23.8497 20.5832C25.1514 18.6351 25.8462 16.3448 25.8462 14.0018C25.8462 13.7162 25.9596 13.4423 26.1616 13.2403C26.3635 13.0383 26.6375 12.9249 26.9231 12.9249C27.2087 12.9249 27.4826 13.0383 27.6846 13.2403C27.8865 13.4423 28 13.7162 28 14.0018C27.9996 17.0836 26.9823 20.0792 25.106 22.5239C23.2296 24.9687 20.599 26.726 17.6222 27.5233C14.6453 28.3207 11.4885 28.1135 8.64141 26.9339C5.79429 25.7543 3.41594 23.6682 1.87521 20.9992C0.334485 18.3302 -0.282523 15.2274 0.11988 12.172C0.522282 9.11656 1.92161 6.27929 4.10084 4.1002C6.28007 1.92111 9.11743 0.521969 12.1729 0.119762C15.2283 -0.282444 18.3311 0.334762 21 1.87566C21.1287 1.94299 21.2425 2.03565 21.3344 2.14807C21.4264 2.2605 21.4946 2.39036 21.5351 2.52985C21.5756 2.66934 21.5874 2.81558 21.5699 2.95976C21.5524 3.10395 21.5059 3.2431 21.4332 3.36885C21.3605 3.49459 21.2631 3.60434 21.1469 3.69148C21.0307 3.77862 20.8981 3.84135 20.757 3.87591C20.616 3.91046 20.4694 3.91612 20.326 3.89255C20.1827 3.86898 20.0457 3.81666 19.9231 3.73874C18.123 2.69776 16.0795 2.15159 14 2.15566Z", fill: "#28A745" }))) : (React.createElement("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M14 26.25C17.2489 26.25 20.3647 24.9594 22.6621 22.6621C24.9594 20.3647 26.25 17.2489 26.25 14C26.25 10.7511 24.9594 7.63526 22.6621 5.33794C20.3647 3.04062 17.2489 1.75 14 1.75C10.7511 1.75 7.63526 3.04062 5.33794 5.33794C3.04062 7.63526 1.75 10.7511 1.75 14C1.75 17.2489 3.04062 20.3647 5.33794 22.6621C7.63526 24.9594 10.7511 26.25 14 26.25ZM14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.10051C21.274 1.475 17.713 0 14 0C10.287 0 6.72601 1.475 4.10051 4.10051C1.475 6.72601 0 10.287 0 14C0 17.713 1.475 21.274 4.10051 23.8995C6.72601 26.525 10.287 28 14 28Z", fill: "#343A40", "fill-opacity": "0.7" }))))),
                React.createElement(react_1.Text, { variant: "body", fontWeight: idx <= currentStep ? 700 : 400 }, s)));
        }))));
};
exports.default = StepProgress;
//# sourceMappingURL=StepProgress.js.map