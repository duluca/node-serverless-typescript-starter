"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Response = /** @class */ (function () {
    function Response(res, err) {
        this.statusCode = err ? 400 : 200;
        this.body = err ? err.message : JSON.stringify(res);
    }
    return Response;
}());
exports.Response = Response;
