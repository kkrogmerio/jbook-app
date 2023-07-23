"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const contentRoute_1 = __importDefault(require("./routes/contentRoute"));
const app = (0, express_1.default)();
// Connect to MongoDB
mongoose_1.default.connect('mongodb://localhost/test');
// Allow parsing of JSON in request body
app.use(express_1.default.json());
// Use the content routes
app.use('/api', contentRoute_1.default);
app.listen(3010, () => {
    console.log('Server is running on port 3010');
});
//# sourceMappingURL=index.js.map