import { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const SingleFileDisplay = ({ file, idx, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { name } = file;

  const initDelete = () => setIsDeleting(true);
  const cancelDelete = () => setIsDeleting(false);
  const confirmDelete = () => onDelete(idx);

  return (
    <ListItem>
      <div>
        <div className="d-flex align-items-center">
          <ListItemText primary={name} />

          <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" onClick={initDelete} />
          </IconButton>
        </div>
        {isDeleting && (
          <div>
            Are you sure you want to remove this file?{" "}
            <Button onClick={confirmDelete}>Yes</Button>
            <Button onClick={cancelDelete}>No</Button>
          </div>
        )}
      </div>
    </ListItem>
  );
};

const MultiFilesDisplay = ({ files = [], setFiles }) => {
  if (files.length === 0) {
    return <>No files uploaded at the moment</>;
  }

  const deleteFiles = (idx) => {
    setFiles((prevFile) => {
      const fileLength = prevFile.length;

      if (fileLength === 1) {
        return [];
      }

      const beforeDeleteFile = prevFile.slice(0, idx);
      const afterDeletedFile = prevFile.slice(idx, -1);

      return [...beforeDeleteFile, ...afterDeletedFile];
    });
  };

  return (
    <>
      <List>
        {files.map((singleFile, idx) => {
          return (
            <SingleFileDisplay
              key={`${singleFile.name}-${singleFile.lastModified}`}
              file={singleFile}
              idx={idx}
              onDelete={deleteFiles}
            />
          );
        })}
      </List>
    </>
  );
};

export default MultiFilesDisplay;
