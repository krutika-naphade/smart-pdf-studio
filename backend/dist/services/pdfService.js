"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const generatePDF = async (html) => {
    const browser = await puppeteer_1.default.launch({
        headless: true,
    });
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
    });
    await browser.close();
    return Buffer.from(pdf);
};
exports.default = generatePDF;
