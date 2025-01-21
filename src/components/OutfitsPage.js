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

export function OutfitsPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClickOpen = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

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
          <div className="clothes-window">
          </div>
          <div className='outfit-window'>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClosePopup}>
            Add item
          </Button>
        </DialogActions>
      </BootstrapDialog>}
      <div className="main">
        <button>Favorites</button>
        <div>
          <p>Create an outfit</p>
        </div>
      </div>
      <button onClick={handleClickOpen}>+</button>
    </div>
  );
}