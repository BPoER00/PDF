import { PDFViewer } from "react-pdf";

function PDFReader2({ file }) {
  const pdfUrl = "ruta/al/archivo.pdf"; // Cambia esto por la ruta de tu archivo PDF

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <PDFViewer
        style={{ width: "100%", height: "100%" }}
        document={{
          url: file,
        }}
      />
    </div>
  );
}

export default PDFReader2;
