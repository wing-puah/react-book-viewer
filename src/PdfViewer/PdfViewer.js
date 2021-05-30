import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

const ViewerContainer = styled.div`
  height: 75vh;
`;

const PdfViewer = ({ meta = {} }) => {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="my-2 mx-3 width-full">
      <h4>View PDF</h4>
      <ViewerContainer className="pdf-container">
        {meta.file && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer
                fileUrl={`/${meta.file}`}
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}

        {!meta.file && <>No pdf file selected</>}
      </ViewerContainer>
    </div>
  );
};

export default PdfViewer;
