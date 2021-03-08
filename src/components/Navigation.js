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
import NinjaTech from "../images/ninjatech.png"

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
    backgroundColor: "rgba(0,0,0, 0.7)",
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
  },
  hide: {
    display: "none",
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#011a1e",
  },
  drawerPaper: {
    //   width: drawerWidth,
    backgroundColor: "rgba(1,26,30,1)",
    fontSize: "1em",

    color: "white",
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
    fontSize: "1em",
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
        id="nav"
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/home`}
            >
              <img id="header-logo" src={NinjaTech} />
              <p style={{color: "white", marginTop: "3em"}}>NinjaTech</p>
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
        className={`${classes.drawer} drawerContent`}
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
            "Home",
            "About Us",
            "Services",
            "Products",
            "Video Demonstration",
            "Contact Us",
          ].map((text, index) => (
            <a
              href={
                // window.location.hostname === "localhost"
                //   ? `/${text.split(" ")[0].toLowerCase()}`
                //   : `/ninjatech/${text.split(" ")[0].toLowerCase()}`
                `/nts/${text.split(" ")[0].toLowerCase()}`
              }
              style={{ textDecoration: "none", color: "inherit" }}
              target={`${text === "Resume" ? "_blank" : ""}`}
            >
              {text === "" ? (
                <p
                  style={{
                    padding: "2em",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  Home
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
