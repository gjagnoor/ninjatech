import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import VisibilitySensor from "react-visibility-sensor"
import qualcommphone from "../images/HTML USE IMAGE/qualcommphone.png"

const Qualcomm = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="qualcomm">
        <Container maxWidth="xl">
          <h5 id="qualcommheading">Qualcomm Snapdragon 835</h5>
          <div>
            <p className="qualcommtext">Augmented Reality</p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              marginTop: "11.5em",
            }}
          >
            <img
              src={qualcommphone}
              style={{ width: "30%" }}
              className="feature-icon_"
            />
            <div style={{ float: "right", marginTop: "10em", width: "55%" }}>
              <center>
                <span className="qualcommp">
                  Powered by the most advance mobile platform the Qualcomm
                  Snapdragon 835, Ninja Tech is a whole new generation of fast
                  and intelligent. The 25% faster CPU, GPU and 100% improved
                  system enables a breathtaking experience in Augmented Reality,
                  browsing and more.
                </span>
              </center>
            </div>
          </div>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default Qualcomm
