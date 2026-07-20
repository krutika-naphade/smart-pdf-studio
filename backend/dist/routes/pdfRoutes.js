"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pdfController_1 = require("../controllers/pdfController");
const router = express_1.default.Router();
// Create a document
router.post("/create", pdfController_1.createDocument);
// Generate PDF
router.get("/generate/:id", pdfController_1.generateDocumentPDF);
// Get document by ID
router.get("/:id", pdfController_1.getDocument);
exports.default = router;
