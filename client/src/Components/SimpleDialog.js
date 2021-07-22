import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TotalReviewSlider from '../Slider/TotalReviewSlider';
import MyReviewSlider from '../Slider/MyReviewSlider';
import FoodMenu from '../Menu/FoodMenu';

const useStyles = makeStyles({
  root: {
  }
});

export default function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, name, loc_door, category, score, visitor, food_name, food_price } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth={true}
    >
      <DialogTitle id="simple-dialog-title">{name + "(" + loc_door + " " + category + ")"}</DialogTitle>
      
      <List>
        <Grid container
          id="DialogGrid"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >

          <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h6" gutterBottom>
                방문자수
              </Typography>
              <Typography variant="h4" gutterBottom>
                {visitor + "명"}
              </Typography>
            </Grid>
            </div>
            <Box component="span" m={2} />

            <div>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h6" gutterBottom>
                총 평점
              </Typography>
              <Typography variant="h4" gutterBottom>
                {score + "점"}
              </Typography>
            </Grid>
            </div>
          </Grid>

          <Box component="span" m={2} />
          {/* <FoodMenu name={food_name} price={food_price} /> */}

          <Box component="span" m={2} />

          <MyReviewSlider />

        </Grid>
      </List>

      
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};