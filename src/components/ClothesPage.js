import React, {useState} from "react";
import { NavBar } from "./NavBar";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function ClothesPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [clothes, setClothes] = useState([]);
  const [isNoItems, setIsNoItems] = useState(true);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const handleClickOpen = () => {
    console.log(selectedFile);
    console.log(clothes);
    setShowPopup(true);
  };

  const onFileChange = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  const handleAddItem = () => {
    setShowPopup(false);
    setSelectedFile(null);
    setIsNoItems(false);
    console.log(selectedFile);
    setClothes([...clothes, selectedFile]);
    console.log(clothes);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const ClothesImages = () => {
    if (clothes.length != 0) {
      return (clothes.map(file => (
        <img
          alt="not found"
          width={"250px"}
          src={URL.createObjectURL(file)}
        />
      )));
    }
  }

  return (
    <div>
      <NavBar/>
      {showPopup && <BootstrapDialog
        onClose={handleClosePopup}
        aria-labelledby="customized-dialog-title"
        open={window.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClosePopup}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
        <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="first">
          <p><input type="file" accept="image/*" name="image" id="file" onChange={onFileChange}/></p>
          <p><img id="output" width="200" /></p>
          </div>
          {selectedFile && (
            <div>
              {/* Display the selected image */}
              <img
                alt="not found"
                width={"250px"}
                src={URL.createObjectURL(selectedFile)}
              />
              <br /> <br />
              {/* Button to remove the selected image */}
              <button onClick={() => setSelectedFile(null)}>Remove</button>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAddItem}>
            Add item
          </Button>
        </DialogActions>
      </BootstrapDialog>}
      <div className="main">
        <button>Favorites</button>
        <div>
          {isNoItems && <p>Import photos of your clothes</p>}
          <ClothesImages/>
        </div>
      </div>
      <button onClick={handleClickOpen}>+</button>
    </div>
  );
}