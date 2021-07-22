import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(el) {
  const classes = useStyles();

  return (
    <div>
      <Popover 
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        >
        <Typography className={classes.typography}>
            {el}
        </Typography>
    </Popover>
    </div>
  );
}
