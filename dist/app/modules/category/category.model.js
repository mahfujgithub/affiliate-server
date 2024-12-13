"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.CategorySchema = new mongoose_1.Schema({
    category: {
        type: String,
        required: true,
        unique: true,
    },
    subcategory: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
// Adding a unique compound index on category and subcategory
exports.CategorySchema.index({ category: 1, subcategory: 1 }, { unique: true });
exports.Menu = (0, mongoose_1.model)('Category', exports.CategorySchema);
