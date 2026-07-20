import puppeteer from "puppeteer";

const generatePDF = async (html: string): Promise<Buffer> => {
  const browser = await puppeteer.launch({
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

export default generatePDF;
