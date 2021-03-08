import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Fade from "@material-ui/core/Fade"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import signature from "../images/HTML USE IMAGE/signature.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMicrochip,
  faBatteryThreeQuarters,
  faMobileAlt,
  faPercentage,
  faFileAlt,
  faThermometerHalf,
  faWifi,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons"
import line from "../images/HTML USE IMAGE/line-about.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    width: "auto"
  },
}))

const Features = () => {
  const [features, setFeatures] = useState([
    ["3300 mAh Polymer Battery", faBatteryThreeQuarters],
    ['5.7" 2K+ Immersive Display', faMobileAlt],
    ["Qualcomm Snapdragon 821", faMicrochip],
    ["60Hz Higher Refer Rate", faPercentage],
    ["120Hz Touch Reporting Rate", faFileAlt],
    ["Liquid Cooling System", faThermometerHalf],
    ["Master Touch", faHandPointer],
    ["SA+NSA 4G WiFi6", faWifi],
  ])
  const classes = useStyles()
  return (
    <Container maxWidth="xl" id="feature">
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
        <center>
        <Grid
          container
          className={classes.root}
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ marginTop: "4em" }}
        >
          {features.slice(0, 4).map((value, i) => (
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <center>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
                className="feature"
              >
                <div>
                  <center>
                    <FontAwesomeIcon
                      icon={value[1]}
                      size="2x"
                      className="featureicon feature-icon_"
                    />
                  </center>
                  <center>
                    <p>{value[0]}</p>
                  </center>
                </div>
                <center>
                  {i === 3 ? null : <img src={line} className="line" />}
                </center>
                </div>
              </center>
            </Grid>
          ))}
          </Grid>
          </center>
      </Fade>
      <Grid
        container
        className={classes.root}
        spacing={2}
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ marginTop: "4em" }}
      >
        {features.slice(4).map((value, i) => (
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              className="feature"
            >
              <div>
                <center>
                  <FontAwesomeIcon
                    icon={value[1]}
                    size="2x"
                    className="featureicon feature-icon_"
                  />
                </center>
                <center>
                  <p>{value[0]}</p>
                </center>
              </div>
              <center>
                {i === 3 ? null : <img src={line} className="line" />}
              </center>
            </div>
          </Grid>
        ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "4em" }}>
        <img src={signature} />
      </div>
    </Container>
  )
}

export default Features
