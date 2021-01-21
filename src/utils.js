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

export function svgToCanvas(svg) {
  const { width, height } = svg.getBBox();
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const img = new Image();
  const svgBlob = new Blob([svg.outerHTML], {
    type: "image/svg+xml;charset=utf-8"
  });
  const svgUrl = window.URL.createObjectURL(svgBlob);
  img.src = svgUrl;
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    window.URL.revokeObjectURL();
  };
  return canvas;
}

// export async function canvasToPdf(containerRef) {
//   // svg -> canvas image

//   // in this case there will just be one svg in the container el
//   const svg = containerRef.querySelector("svg");
//   console.log(svgToCanvas(svg));

//   // create blob
//   const { outerHTML } = svg;
//   const blob = new Blob([outerHTML], { type: "image/svg+xml;charset=utf-8" });
//   const blobURL = window.URL.createObjectURL(blob);

//   // prepare image el
//   const image = new Image();
//   image.src = blobURL;

//   // prepare canvas
//   const canvas = document.createElement("canvas");
//   const { width, height } = svg.getBBox();
//   canvas.width = width;
//   canvas.height = height;
//   const context = canvas.getContext("2d");
//   context.drawImage(image, 0, 0, width, height);

//   // // deep clone svg el
//   // let clonedSvg = svg.cloneNode(true);

//   // image.onload = function onLoad() {
//   // }

//   // svg -> pdf

//   const pngURL = canvas.toDataURL();
//   const pngImageBytes = await fetch(pngURL).then((res) => res.arrayBuffer());

//   const pdfDoc = await PDFDocument.create();

//   const pngImage = await pdfDoc.embedPng(pngImageBytes);
//   const pngDims = pngImage.scale(0.3);

//   const page = pdfDoc.addPage();

//   page.drawImage(pngImage, {
//     x: page.getWidth() / 2 - pngDims.width / 2,
//     y: page.getHeight() / 2,
//     width: pngDims.width,
//     height: pngDims.height
//   });

//   const pdfBytes = await pdfDoc.save();
//   download(pdfBytes, "export.pdf", "application/pdf");
// }
