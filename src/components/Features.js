import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import battery from "../images/section-2.png"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import signature from "../images/HTML USE IMAGE/signature.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const Features = () => {
  const [features, setFeatures] = useState([
    "3300 mAh Polymer Battery",
    '5.7" 2K+ Immersive Display',
    "Qualcomm Snapdragon 821",
    "60Hz Higher Refer Rate",
    "120Hz Touch Reporting Rate",
    "Liquid Cooling System",
    "Master Touch",
    "SA+NSA 4G WiFi6",
  ])
  const classes = useStyles()
  return (
    <Container maxWidth="xl" style={{ margin: 0, padding: 0 }} id="feature">
      <Fade
        direction="up"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 7000 }}
      >
        <h5 id="featuresheading">The Ultimate AR Gaming Phone</h5>
      </Fade>
      <Fade
        direction="up"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 7000 }}
      >
        <Grid
          container
          className={classes.root}
          spacing={1}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          {features.slice(0, 4).map((value, i) => (
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingTop: "5em",
                }}
                className="featuretext"
              >
                {value}
              </p>
              {<p className="line"></p>}
            </Grid>
          ))}
          {features.slice(4).map((value, i) => (
            <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  paddingTop: "5em",
                }}
                className="featuretext"
              >
                {value}
              </p>
              {<p className="line"></p>}
            </Grid>
          ))}
        </Grid>
      </Fade>
      <div style={{ textAlign: "center", marginTop: "4em" }}>
        <img src={signature} />
      </div>
    </Container>
  )
}

export default Features
