"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDocumentPDF = exports.getDocument = exports.createDocument = void 0;
const pdfService_1 = __importDefault(require("../services/pdfService"));
const invoiceTemplate_1 = __importDefault(require("../templates/invoiceTemplate"));
const Document_1 = __importDefault(require("../models/Document"));
// Create Document
const createDocument = async (req, res) => {
    try {
        const document = await Document_1.default.create(req.body);
        res.status(201).json({
            success: true,
            message: "Document created successfully",
            data: document,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Internal Server Error",
        });
    }
};
exports.createDocument = createDocument;
// Get Document by ID
const getDocument = async (req, res) => {
    try {
        const document = await Document_1.default.findById(req.params.id);
        if (!document) {
            res.status(404).json({
                success: false,
                message: "Document not found",
            });
            return;
        }
        res.status(200).json(document);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Internal Server Error",
        });
    }
};
exports.getDocument = getDocument;
// Generate PDF
const generateDocumentPDF = async (req, res) => {
    try {
        const document = await Document_1.default.findById(req.params.id);
        if (!document) {
            res.status(404).json({
                success: false,
                message: "Document not found",
            });
            return;
        }
        // Convert document to HTML
        const html = (0, invoiceTemplate_1.default)(document);
        // Generate PDF
        const pdf = await (0, pdfService_1.default)(html);
        // Create unique filename
        const filename = `${document.invoiceNumber}_${Date.now()}.pdf`;
        // Return PDF
        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${filename}"`,
        });
        res.send(pdf);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Internal Server Error",
        });
    }
};
exports.generateDocumentPDF = generateDocumentPDF;
