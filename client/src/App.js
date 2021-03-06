import React, { useState, useEffect, useReducer } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Tab from '@material-ui/core/Tab';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import Map from './Map/KakaoMap';
import SimpleDialog from './Components/SimpleDialog';
import CampusMenu from './Menu/CampusMenu';
import CovidMenu from './Menu/CovidMenu';

import { Init, InitLocation } from './Mun/Init';
import { Buk, BukLocation } from './Mun/Buk';
import { Dong, DongLocation } from './Mun/Dong';
import { Seo, SeoLocation } from './Mun/Seo';
import { JJok, JJokLocation } from './Mun/JJok';
import { Tech, TechLocation } from './Mun/Tech';
import { Sangju, SangjuLocation } from './Mun/Sangju';
import createTypography from '@material-ui/core/styles/createTypography';

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

const drawerWidth = window.innerWidth * 1 / 6;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.appBar - 1,
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const [level, setLevel] = useState("");

  // ????????? ??????
  const [campus, setCampus] = React.useState("???????????????");

  // ??????, ??????
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  // ????????? ?????????
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [loc_door, setLoc_door] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState("");
  const [visitor, setVisitor] = useState("");
  const [food_name, setFood_name] = useState({});
  const [food_price, setFood_price] = useState({});

  const [selectedValue, setSelectedValue] = useState("");

  const handleResponse = (res) => {
    let tempName = Array();
    let tempPrice = Array();

    setName(res.data.name);
    setLoc_door(res.data.loc_door);
    setCategory(res.data.category);
    setScore(res.data.score);
    setVisitor(res.data.visitor);

    try {
      res.data.menu.forEach(e => tempName.push(e.menu_name));
    } catch {
      console.log("Menu is undefined.")
    }
    try {
      res.data.price.forEach(e => tempPrice.push(e.menu_price));
    } catch {
      console.log("Price is undefined.")
    }

    setFood_name(tempName.map((e, index) => (
      <Tab label={e} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`} />
  )));
    setFood_price(tempPrice.map((e, index) => (
      <TabPanel value={e} index={index}>
      {e}
      </TabPanel>
  )));
  };

  const getData = (el) => {
    axios.get("http://slave2.kert.or.kr:30000/api/name/"+el.replace(/ /g, ""), {headers}).then(handleResponse)
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  // ????????? ??????
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ?????? ?????????
  const getElementLocation = () => {
    if (campus === "???????????????") {
      if (level === "??????") {
        return BukLocation;
      } else if (level === "??????") {
        return DongLocation;
      } else if (level === "??????") {
        return SeoLocation;
      } else if (level === "??????") {
        return JJokLocation;
      } else if (level === "????????????") {
        return TechLocation;
      } else {
        return InitLocation;
      }
    } else {
      return SangjuLocation;
    }
  }

  const getElement = () => {
    if (campus === "???????????????") {
      if (level === "??????") {
        return Buk;
      } else if (level === "??????") {
        return Dong;
      } else if (level === "??????") {
        return Seo;
      } else if (level === "??????") {
        return JJok;
      } else if (level === "????????????") {
        return Tech;
      } else {
        return Init;
      }
    } else {
      return Sangju;
    }
  }

  const getElementTitle = () => {
    if (campus === "???????????????") {
      if (level === "??????") {
        return Buk.map(e => e.title);
      } else if (level === "??????") {
        return Dong.map(e => e.title);
      } else if (level === "??????") {
        return Seo.map(e => e.title);
      } else if (level === "??????") {
        return JJok.map(e => e.title);
      } else if (level === "????????????") {
        return Tech.map(e => e.title);
      } else {
        return Init.map(e => e.title);
      }
    } else {
      return Sangju.map(e => e.title);
    }
  }

  const onClickListener = (el) => {
    if (["??????", "??????", "??????", "??????", "????????????"].includes(el)) {
      setLevel(el);
    } else {
      getData(el);
      handleClickOpen();
    }
  }

  const handleClick = value => () => onClickListener(value);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {getElementTitle().map((text, index) => (
          <ListItem button key={text} onClick={handleClick(text)}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const resizeWindow = () => {
    setLevel("????????????");
  };

  console.log(getElement(), level, lat, lng);


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {"?????????? " + level}
          </Typography>
          <CampusMenu setCampus={setCampus} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container
          id="MapGrid"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
        {/* <CovidMenu /> */}

        <Map
          handleClick={(e) => handleClick(e)}
          getElement={() => getElement()}
          getElementLocation={() => getElementLocation()}
        />
        </Grid>
      </main>
      
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} name={name} loc_door={loc_door} category={category} score={score} visitor={visitor} food_name={food_name} food_price={food_price} />
    </div>
  );
}

export default ResponsiveDrawer;