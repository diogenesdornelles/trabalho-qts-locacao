"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSchema = void 0;
const zod_1 = require("zod");
// Schema auxiliar para converter strings ou Date em objeto Date
exports.dateSchema = zod_1.z.preprocess(arg => {
    if (typeof arg === 'string' || arg instanceof Date) {
        const d = new Date(arg);
        if (!isNaN(d.getTime()))
            return d;
    }
    return undefined;
}, zod_1.z.date());
