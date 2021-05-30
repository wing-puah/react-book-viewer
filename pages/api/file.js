// import { createWorker } from "tesseract.js";
import multer from "multer";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

// const worker = createWorker({
//   logger: (m) => m,
// });

async function doOcr(file) {
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.getPDF(file);
  //   console.log(text);
}

export default function fileHandler(req, res) {
  if (req.method === "POST") {
    const uploadBooks = upload.single("books");
    uploadBooks(req, res, function (err) {
      console.log({ files: req.file });
    });

    return res.status(200).json({ success: "success" });
  }
}
