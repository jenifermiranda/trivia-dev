"use strict";
// type m = {
//   [key: string]: number,
// };
Object.defineProperty(exports, "__esModule", { value: true });
function mapStatusHTTP(status) {
    var _a;
    var statusHTTPMap = {
        SUCCESSFUL: 200,
        CREATED: 201,
        INVALID_DATA: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        UNPROCESSABLE_ENTITY: 422,
    };
    return (_a = statusHTTPMap[status]) !== null && _a !== void 0 ? _a : 500;
}
exports.default = mapStatusHTTP;
