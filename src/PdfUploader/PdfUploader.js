import { useState } from "react";
import { createWorker } from "tesseract.js";
import axios from "axios";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import MultiFilesDisplay from "./MultiFilesDisplay";
import useOcrHandler from "./useOcrHandler";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  input: {
    display: "none",
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    width: 90vw;
  }

  @media only screen and (min-width: 600px) {
    .MuiPaper-root {
      width: 600px;
    }
  }
`;

const PdfUploader = withStyles(styles)(({ open, setOpen, classes }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setUploadedFiles([]);
    setOpen(false);
  };

  const { doOCR } = useOcrHandler();
  const handleUpload = async ({ target }) => {
    const file = target.files[0];

    if (!file) return;
    await doOCR(file);

    if (!/pdf/i.test(file.type)) {
      setError("Incorrect file type. Please upload PDF files only");
      return;
    }

    // need to generate uuid key
    setUploadedFiles((prevFiles) => {
      return [file];
    });
  };

  const uploadToServer = () => {
    const data = new FormData();
    console.log({ uploadedFiles });
    data.append("file", uploadedFiles[0], uploadedFiles[0].name);
    // axios
    //   .post("/api/file", data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log({ res });
    //   })
    //   .catch((error) => {
    //     console.log({ error });
    //   });
  };

  const handleCloseError = () => setError(null);
  const isUploadable = uploadedFiles.length > 0;
  const test = {};

  return (
    <>
      {error && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleCloseError}
          message={error}
        >
          <Alert onClose={handleCloseError} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
      <StyledDialog
        onClose={handleClose}
        aria-labelledby="books-uploader"
        open={open}
      >
        <DialogTitle id="books-uploader-title" onClose={handleClose}>
          Upload books to collection
        </DialogTitle>

        <DialogContent dividers>
          <div>
            <strong>Accepted files: pdf</strong>
          </div>
          <MultiFilesDisplay
            files={uploadedFiles}
            setFiles={setUploadedFiles}
          />
        </DialogContent>
        <DialogActions>
          <div>
            <input
              accept=".pdf"
              className={classes.input}
              name="books"
              id="contained-button-file"
              onChange={handleUpload}
              type="file"
            />
            <label htmlFor="contained-button-file" className="mb-0">
              <Button
                variant="contained"
                color="primary"
                component="span"
                disableElevation
              >
                Add file
              </Button>
            </label>
          </div>

          <Button
            autoFocus
            onClick={uploadToServer}
            color="primary"
            variant="outlined"
            disabled={!isUploadable}
          >
            Upload
          </Button>
        </DialogActions>
      </StyledDialog>
    </>
  );
});

export default PdfUploader;
