import { PDFDocument } from "pdf-lib";
import download from "downloadjs";

// // util to download as file
// export function download(href, name) {
//   const link = document.createElement("a");
//   link.download = name;
//   link.style.visibility = "hidden";
//   link.href = href;
//   link.click();
//   link.remove();
// }

export async function canvasToPdf(canvasRef) {
  const pngURL = canvasRef.toDataURL();
  const pngImageBytes = await fetch(pngURL).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.create();

  const pngImage = await pdfDoc.embedPng(pngImageBytes);
  const pngDims = pngImage.scale(0.3);

  const page = pdfDoc.addPage();

  page.drawImage(pngImage, {
    x: page.getWidth() / 2 - pngDims.width / 2,
    y: page.getHeight() / 2,
    width: pngDims.width,
    height: pngDims.height
  });

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, "export.pdf", "application/pdf");
}
