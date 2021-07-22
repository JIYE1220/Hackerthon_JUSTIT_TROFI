import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SchoolIcon from '@material-ui/icons/School';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    float: 'right',
  },
}));

export default function CampusMenu(props) {
  const classes = useStyles();
  const { setCampus } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (ev) => {
    setCampus(ev.nativeEvent.target.outerText);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" className={classes.menuButton} color="inherit" onClick={handleClick}>
        <SchoolIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>대구캠퍼스</MenuItem>
        <MenuItem onClick={handleClose}>상주캠퍼스</MenuItem>
      </Menu>
    </div>
  );
}