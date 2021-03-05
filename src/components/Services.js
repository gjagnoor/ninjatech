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
                justifyContent: "center",
              }}
            >
              <div className="service">
                <img src={laptop} className="services-icon" />
                <div>
                  <p className="service-heading">End to End IT Services</p>
                  <p className="servicep">
                    We handle all the activities involved to meet your
                    requirements of hardware, software and systems keeping in
                    mind the demands of your growing business. Our End-to-end
                    solution eliminates hassles, reduces the costs, resources
                    and time involved in the solution installation,
                    integrationand setup. Trend with the leader for achieving
                    effective everyday business management with a wide range of
                    benefits
                    <span>
                      <br />
                      <br />
                    </span>
                    Better Operational Efficiency, Reduced Costs User specific
                    Customization and seamless Integration Faster issue handling
                    and Resolution Most reliable Application Management and
                    Maintenance{" "}
                  </p>
                </div>
              </div>
              <div className="service">
                <img src={cloudcomputing} className="services-icon" />
                <div>
                  <p className="service-heading">Cloud Computing</p>
                  <p className="servicep">
                    AR cloud technology enables the unification of the physical
                    and digital world to create immersive experiences like the
                    one just described. This technology uses a common interface
                    to deliver persistent, collaborative and contextual digital
                    content overlaid onto people, objects and locations. This
                    provides users with information and services directly tied
                    to every aspect of their physical surroundings.{" "}
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
                justifyContent: "center",
              }}
            >
              <div className="service">
                <img src={cybersecurity} className="services-icon" />
                <div>
                  <p className="service-heading">Cyber Security</p>
                  <p className="servicep">
                    A cyber liability insurance helps an organisation mitigate
                    the financial loss to business due to data breach or any
                    cyber risk. It also covers for legal costs and damages
                    resulting from the data breach.Also called as “Cyber
                    Security insurance” or “Cyber risk Insurance” this is an
                    insurance policy that pays for both first and third party
                    losses as a result of a phones-based attack or malfunction
                    of information technology systems.{" "}
                  </p>
                </div>
              </div>
              <div className="service">
                <img src={repair} className="services-icon" />
                <div>
                  <p className="service-heading">Lifetime Repair</p>
                  <p className="servicep">
                    Every repair done by NTech comes with a lifetime warranty on
                    all parts and labor associated with the preceding repair.{" "}
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
