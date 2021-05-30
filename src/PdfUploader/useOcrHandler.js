import Tesseract from "tesseract.js";
import axios from "axios";

const readFileData = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (err) => {
      reject(err);
    };
    reader.readAsDataURL(file);
  });
};

const useOcrHandler = () => {
  const doOCR = async (file) => {
    // const images = [];
    // const data = await readFileData(file);
    // // console.log({ pdfjsLib });
    // const pdf = await pdfjsLib.getDocument(data).promise;
    // console.log({ pdf });
    // const canvas = document.createElement("canvas");
    // for (let i = 0; i < pdf.numPages; i++) {
    //   const page = await pdf.getPage(i + 1);
    //   const viewport = page.getViewport({ scale: 1 });
    //   const context = canvas.getContext("2d");
    //   canvas.height = viewport.height;
    //   canvas.width = viewport.width;
    //   await page.render({ canvasContext: context, viewport: viewport }).promise;
    //   console.log({ toDataURl: canvas.toDataURL() });
    //   images.push(canvas.toDataURL());
    // }
    // canvas.remove();

    // console.log({ images });
    // for (const image in images) {
    //   Tesseract.recognize(image, "eng", { logger: (m) => console.log(m) }).then(
    //     ({ data: { text } }) => {
    //       console.log(text);
    //     }
    //   );
    // }

    // await recognize(file);
    // await worker.load();
    // await worker.loadLanguage("eng");
    // await worker.initialize("eng");
    // const { data } = await worker.getPDF("Tesseract OCR Result");
    // const {
    //   data: { text },
    // } = await worker.recognize(file);
    console.log({});
  };

  return { doOCR };
  // return (
  //   <PDFtoIMG file={file}>
  //     {({ pages }) => {
  //       console.log({ pages });
  //       return null;
  //     }}
  //   </PDFtoIMG>
  // );
};

export default useOcrHandler;
