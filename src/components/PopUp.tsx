import { ReactNode } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface IPopUp {
  open: boolean;
  title: string;
  explain: string;
  buttons: any;
  onClose: any;
  children: ReactNode;
}

const PopUp = ({ 
  open,
  title,
  explain,
  buttons,
  onClose,
  children
}: IPopUp) => {
  
  return(
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{explain}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        {buttons.map((button: any) => (
          <Button onClick={button.actionFn}>{button.name}</Button>
        ))}
      </DialogActions>
    </Dialog>
  )
}

export default PopUp;