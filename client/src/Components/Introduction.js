import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Introduction() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Typography variant="h3">
          환영합니다
        </Typography>
      </Backdrop>
    </div>
  );
}
