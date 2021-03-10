import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import laptop from "../images/HTML USE IMAGE/laptop-icon.png"
import cloudcomputing from "../images/HTML USE IMAGE/cloudcomputing.png"
import cybersecurity from "../images/HTML USE IMAGE/cybersecurity.png"
import repair from "../images/HTML USE IMAGE/repair.png"
import line from "../images/HTML USE IMAGE/line-about.png"
import VisibilitySensor from "react-visibility-sensor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptopCode,
  faCloud,
  faLock,
  faCogs,
} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="services">
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="servicesheading">Services</h5>
          <center>
            <img src={line} id="service-line" />
          </center>
          <Slide
            direction="right"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={3000}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
              id="services__"
            >
              <div className="service">
                <center>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    size="2x"
                    className="featureicon_"
                  />
                </center>

                <div>
                  <p className="service-heading">End to End IT Services</p>
                  <p className="servicep">
                    We handle all the services involved to meet your
                    requirements of hardware, software, and systems. Our
                    End-to-end solution eliminates hassles, reduces the costs,
                    resources and time involved in solution installation,
                    integration, and setup. Achieve effective everyday
                    management with a wide range of benefits.
                  </p>
                </div>
              </div>
              <div className="service">
                <center>
                  <FontAwesomeIcon
                    icon={faCloud}
                    size="2x"
                    className="featureicon_"
                  />
                </center>
                <div>
                  <p className="service-heading">Cloud Computing</p>
                  <p className="servicep">
                    AR cloud is a real time 3d map of the world, overlays the
                    real world, and combines the physical and digital world to
                    create immersive experience. Imagine you're walking in an
                    unfamiliar city and decide to stop for lunch. You put your
                    AR-enabled glasses and search a restaurant. After you select
                    a place, you put the glasses on once again and a virtual
                    menu appears on the table. This technology uses a common
                    interface to deliver persistent, collaborative and
                    contextual digital content overlaid onto people, objects and
                    locations.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide
            direction="left"
            in={isVisible}
            mountOnEnter
            unmountOnExit
            timeout={3000}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
              id="services__"
            >
              <div className="service">
                <center>
                  <FontAwesomeIcon
                    icon={faLock}
                    size="2x"
                    className="featureicon_"
                  />
                </center>

                <div>
                  <p className="service-heading">Cyber Security</p>
                  <p className="servicep">
                    A cyber liability insurance helps an organization mitigate
                    the financial loss due to data breach or any cyber risk. It
                    also covers for legal costs and damages resulting from the
                    data breach. Also called the “Cyber Security Insurance” or
                    “Cyber Risk Insurance”, this is an insurance policy that
                    pays for both first and third party losses as a result of a
                    phones-based attack or malfunction of information technology
                    system.{" "}
                  </p>
                </div>
              </div>
              <div className="service">
                <center>
                  <FontAwesomeIcon
                    icon={faCogs}
                    size="2x"
                    className="featureicon_"
                  />
                </center>

                <div>
                  <p className="service-heading">Lifetime Repair</p>
                  <p className="servicep">
                    Every repair done by NinjaTech comes with a lifetime
                    warranty on all parts and labor associated with the
                    preceeding repair.{" "}
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </Container>
      </div>
    </VisibilitySensor>
  )
}

export default Services
