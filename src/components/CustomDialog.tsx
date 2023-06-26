import { Button } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

export default function CustomDialog({ open, onClose, title }: any) {

  return(
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>

      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={onClose}>확인</Button>
      </DialogActions>
    </Dialog>
  )
}