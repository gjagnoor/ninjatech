import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Fade from "@material-ui/core/Fade"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import signature from "../images/HTML USE IMAGE/signature.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip ,faBatteryThreeQuarters, faMobileAlt, faPercentage, faFileAlt, faThermometerHalf, faWifi, faHandPointer} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
          spacing={2}
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          {features.slice(0, 4).map((value, i) => (
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <div style={{marginTop: "5em"}}>
                <center>
                  <div>
                    <FontAwesomeIcon icon={value[1]} size="3x" className="featureicon feature-icon_" /> 
                  </div>
                </center>

                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    paddingTop: "5em",
                    margin: "2em",
                    whiteSpace: "nowrap"
                  }}
                  className="featuretext"
                >
                  {value[0]}
                </p>
              </div>
              {i == 0 ? null : <p className="line"></p>}
            </Grid>
          ))}
          {features.slice(4).map((value, i) => (
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <div>
                <center>
                  <div>
<FontAwesomeIcon icon={value[1]} size="3x" className="featureicon feature-icon_" /> 
                  </div>
                </center>
                <p
                  style={{
                    color: "white",
                    textAlign: "center",
                    paddingTop: "5em",
                    whiteSpace: "nowrap"
                  }}
                >
                  {value[0]}
                </p>
              </div>
              {i == 0 ? null : <p className="line"></p>}
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
