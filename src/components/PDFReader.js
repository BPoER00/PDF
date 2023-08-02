import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

function PDFReader({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();
  
  const onDocumentSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={"/Informacion.pdf"} onLoadSuccess={onDocumentSuccess}>
        <Page pageNumber={pageNumber}></Page>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PDFReader;
