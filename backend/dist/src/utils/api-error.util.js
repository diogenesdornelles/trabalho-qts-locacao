"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
/**
 * Custom error class for API errors.
 * Extends the built-in Error class to include an HTTP status code.
 */
class ApiError extends Error {
    /**
     * Creates an instance of ApiError.
     *
     * @param {number} statusCode - The HTTP status code for the error.
     * @param {string} message - A descriptive error message.
     */
    constructor(statusCode, message) {
        // Call the parent Error class constructor with the error message.
        super(message);
        // Set the statusCode property for this instance.
        this.statusCode = statusCode;
    }
}
exports.ApiError = ApiError;
