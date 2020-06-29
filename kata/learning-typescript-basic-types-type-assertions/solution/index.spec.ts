import {
    getResult,
    ErrorServerResult,
    SuccessServerResult
} from '.';

describe("getResult", () => {
    it("should return correct results for SuccessServerResult", () => {
        var message = { "message": "Hello, world!" };
        var success = new SuccessServerResult(200, message);
        expect(getResult(success)).toBe(message);
    });
    it("should return correct results for ErrorServerResult", () => {
        var message = "Not found";
        var error = new ErrorServerResult(404, message);
        expect(getResult(error as any)).toBe(message);
    });
});
