import express from "express";

import {
  createDocument,
  getDocument,
  generateDocumentPDF,
} from "../controllers/pdfController";

const router = express.Router();

// Create a document
router.post("/create", createDocument);

// Generate PDF
router.get("/generate/:id", generateDocumentPDF);

// Get document by ID
router.get("/:id", getDocument);

export default router;
