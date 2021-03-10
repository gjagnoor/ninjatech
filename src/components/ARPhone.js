import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Grow from "@material-ui/core/Grow"
import Fade from "@material-ui/core/Fade"
import spiderman from "../images/HTML USE IMAGE/spiderman.png"
import VisibilitySensor from "react-visibility-sensor"

const ARPhone = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <div id="ARPhone">
      <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
        <h5 id="ARPhoneheading">AR Phones</h5>
        <div
          id="arphonescontent"
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "2rem",
            justifyContent: "space-around",
          }}
        >
          <p id="arphonesp">
            Augmented Reality is used to enhance your natural environment and
            offer a perceptually enriched experience with the help of advanced
            AR Technology. The information about the surrounding real world
            becomes interactive. The AR phone can create a virtual environment
            with a projection technology, giving a feel of futuristic
            entertainment. NinjaTech specializes in new-age technology. It
            designs, develops, manufactures, and sells Tech enabled smartphones.
            Working with the ethos of ‘Smarter Technology' for All.
          </p>
          <VisibilitySensor
            partialVisibility
            onChange={onChange}
            scrollCheck={true}
          >
            <center>
              <img
                src={spiderman}
                id="spiderman"
                className={isVisible ? "zoom" : ""}
              />
            </center>
          </VisibilitySensor>
        </div>
      </Container>
    </div>
  )
}

export default ARPhone
