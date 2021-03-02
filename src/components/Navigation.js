import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { Link } from "gatsby"
import NinjaTech from "../images/ninjatech.png";

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#0e1a2d",
    justifyContent: "center",
    fontSize: "1em",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#0e1a2d",
    color: "#04d9ff",
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // margin: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Tw Cen MT",
  },
  hide: {
    display: "none",
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#0e1a2d",
    fontFamily: "Tw Cen MT",
  },
  drawerPaper: {
    //   width: drawerWidth,
    backgroundColor: "#0e1a2d",
    color: "#04d9ff",
    fontFamily: "Tw Cen MT",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(7),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    margin: "auto",
    fontFamily: "Tw Cen MT",
    fontSize: "1.2em",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    margin: 0,
  },
}))

export default function PersistentDrawerRight({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        xs={12}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link style={{ textDecoration: "none", color: "inherit" }} to={`/`}>
              <img id="header-logo" src={NinjaTech} />
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <p
            onClick={handleDrawerClose}
            style={{ padding: "2em", cursor: "pointer" }}
          >
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </p>
        </div>
        <Divider />
        <List>
          {[
            "About Us",
            "Services",
            "Products",
            "Video Demonstration",
            "Contacts",
          ].map((text, index) => (
            <a
              href={
                text !== "Resume"
                  ? `/portfolio/profile/#${text
                      .split(" ")
                      .join("")
                      .toLowerCase()}`
                  : `https://drive.google.com/file/d/1ta6t3ewzs0lFxt740RxNtoS9HhtMOo11/view?usp=sharing`
              }
              style={{ textDecoration: "none", color: "inherit" }}
              target={`${text === "Resume" ? "_blank" : ""}`}
            >
              {text === "Resume" ? (
                <p
                  style={{
                    padding: "2em",
                    textAlign: "center",
                    cursor: "pointer",
                    border: "1px solid #04d9ff",
                    padding: "0.9em",
                    margin: "4em",
                    borderRadius: "25%",
                  }}
                >
                  {text}
                </p>
              ) : (
                <p
                  style={{
                    padding: "2em",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  {text}
                </p>
              )}
            </a>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
