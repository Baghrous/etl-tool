import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: 100,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  dropzone: {
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  dropzoneActive: {
    backgroundColor: theme.palette.action.hover,
  },
  uploadBtn: {
    marginTop: theme.spacing(2),
    backgroundColor: "#237A5A",
    color: "white",
    "&:hover": {
      backgroundColor: "#1D634B",
    },
  },
}));

function UploadPanel() {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", files[0].name);
    formData.append("file", files[0]);
    axios.post("http://localhost:8000/documents/", formData).then(() => {
      alert("File uploaded successfully!");
    });
  }

  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => prevFiles.concat(acceptedFiles));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".csv",
    multiple: false,
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Upload your CSV file to get started
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <div
            {...getRootProps({
              className: `${classes.dropzone} ${
                isDragActive ? classes.dropzoneActive : ""
              }`,
            })}
          >
            <input {...getInputProps()} />
            <CloudUploadIcon className={classes.icon} />
            <Typography variant="subtitle1">
              Drag and drop your file here or click to select a file
            </Typography>
            <Typography variant="caption">
              (Accepted file types: CSV)
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className={classes.uploadBtn}
            startIcon={<CloudUploadIcon />}
            disabled={files.length === 0}
            onClick={(event) => handleSubmit(event)}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadPanel;
