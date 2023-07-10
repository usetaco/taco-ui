"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TacoError = void 0;
var TacoError = (function () {
    function TacoError(errorCode, errorTitle, errorMessage) {
        this.errorCode = errorCode;
        this.errorTitle = errorTitle;
        this.errorMessage = errorMessage;
    }
    TacoError.createError = function (_a) {
        var _b = _a.errorCode, errorCode = _b === void 0 ? 500 : _b, _c = _a.errorTitle, errorTitle = _c === void 0 ? 'Uh oh, something went wrong...' : _c, _d = _a.errorMessage, errorMessage = _d === void 0 ? 'Oops! An error ocurred. Please try again.' : _d;
        return new TacoError(errorCode, errorTitle, errorMessage);
    };
    return TacoError;
}());
exports.TacoError = TacoError;
//# sourceMappingURL=TacoError.js.map