"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nanoid_1 = require("nanoid");
const Content_1 = __importDefault(require("../models/Content"));
const router = express_1.default.Router();
router.post('/content', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, nanoid_1.nanoid)();
    const content = new Content_1.default({
        _id: id,
        cells: req.body.cells,
        bundles: req.body.bundles,
    });
    yield content.save();
    res.status(201).send({ shareId: id });
}));
router.get('/content/:shareId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield Content_1.default.findById(req.params.shareId);
    console.log("AJUNG AICI??>");
    if (content) {
        console.log("DE AICI");
        res.status(200).send(content);
    }
    else {
        res.status(404).send({ error: 'Content not found' });
    }
}));
exports.default = router;
//# sourceMappingURL=contentRoute.js.map