import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import VisibilitySensor from "react-visibility-sensor"

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
          <div style={{ float: "right", marginTop: "10em" }}>
              <center>
                <span className="qualcommp">
                  Powered by the most advance mobile platform
                </span>
              </center>
              <center>
                <span className="qualcommp">
                  the Qualcomm Snapdragon 835, Ninja Tech is a
                </span>
              </center>
              <center>
                <span className="qualcommp whole">
                  whole new generation of fast and intelligent. The
                </span>
              </center>
              <center>
                <span className="qualcommp">
                  25% faster CPU, GPU and 100% improved
                </span>
              </center>
              <center>
                <span className="qualcommp">
                  system enables a breathtaking experience in
                </span>
              </center>
              <center>
                <span className="qualcommp">
                  Augmented Reality, browsing and more.
                </span>
              </center>
          </div>
        </Container>
      </div>
      </VisibilitySensor>
  )
}

export default Qualcomm
