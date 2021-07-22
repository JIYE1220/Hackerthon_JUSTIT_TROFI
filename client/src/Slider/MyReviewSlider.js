import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 1,
    label: '1점',
  },
  {
    value: 2,
    label: '2점',
  },
  {
    value: 3,
    label: '3점',
  },
  {
    value: 4,
    label: '4점',
  },
  {
    value: 5,
    label: '5점',
  },
];

function valuetext(value) {
  return `${value}점`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        내 평점
      </Typography>
      <Slider
        min={1}
        max={5}
        step={0.1}
        color="secondary"
        defaultValue={5}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        valueLabelDisplay="on"
        marks={marks}
      />
    </div>
  );
}