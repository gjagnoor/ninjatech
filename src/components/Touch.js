import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import VisibilitySensor from "react-visibility-sensor"

const Touch = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div className={isVisible ? "fadein" : ""}>
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="touchheading">Master Touch 2.0</h5>
          <div>
            <p className="touchtext">
              NTech's Master Touch 2.O lets you set a custom touch zone,
            </p>
            <p className="touchtext2">
              allowing you to respond to pressure controls even on screen edges.
            </p>
          </div>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default Touch
