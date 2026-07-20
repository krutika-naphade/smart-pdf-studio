import { Request, Response } from "express";

import generatePDF from "../services/pdfService";
import invoiceTemplate from "../templates/invoiceTemplate";
import Document from "../models/Document";

// Create Document
export const createDocument = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const document = await Document.create(req.body);

    res.status(201).json({
      success: true,
      message: "Document created successfully",
      data: document,
    });
  } catch (error) {
    console.error("Create Document Error:", error);

    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Get Document by ID
export const getDocument = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      res.status(404).json({
        success: false,
        message: "Document not found",
      });
      return;
    }

    res.status(200).json(document);
  } catch (error) {
    console.error("Get Document Error:", error);

    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Internal Server Error",
    });
  }
};

// Generate PDF
export const generateDocumentPDF = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("--------------------------------");
    console.log("Generate PDF Request Received");
    console.log("Requested ID:", req.params.id);

    const document = await Document.findById(req.params.id);

    if (!document) {
      console.log("Document not found!");

      res.status(404).json({
        success: false,
        message: "Document not found",
      });
      return;
    }

    console.log("Document Found");
    console.log("Invoice Number:", document.invoiceNumber);

    // Convert document to HTML
    const html = invoiceTemplate(document);

    console.log("HTML Generated Successfully");

    // Generate PDF
    const pdf = await generatePDF(html);

    console.log("PDF Generated Successfully");

    // Create unique filename
    const filename = `${document.invoiceNumber}_${Date.now()}.pdf`;

    console.log("Sending PDF:", filename);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
    });

    res.send(pdf);

    console.log("PDF Sent Successfully");
    console.log("--------------------------------");
  } catch (error) {
    console.error("Generate PDF Error:");
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Internal Server Error",
    });
  }
};
