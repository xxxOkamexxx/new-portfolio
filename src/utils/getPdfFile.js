export const getPdfFile = () => {
  const pdfUrl = "CV.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "chikage-molander.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};