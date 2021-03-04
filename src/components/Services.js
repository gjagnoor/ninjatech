import { Link } from "gatsby"
import React, { useEffect } from "react"
import Container from "@material-ui/core/Container"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import laptop from "../images/HTML USE IMAGE/laptop-icon.png"
import cloudcomputing from "../images/HTML USE IMAGE/cloudcomputing.png"
import cybersecurity from "../images/HTML USE IMAGE/cybersecurity.png"
import repair from "../images/HTML USE IMAGE/repair.png"
import line from "../images/HTML USE IMAGE/line-about.png"

const Services = () => {
  return (
    <div id="services">
        <Container maxWidth="xl" style={{ margin: 0, padding: 0 }}>
          <h5 id="servicesheading">Services</h5>
          <center>
            <img src={line} id="service-line" />
        </center>
        <Slide
        direction="right"
        in={true}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <img src={cloudcomputing} className="services-icon" />
              <div>
                <p className="service-heading">Cloud Computing</p>
                <p className="servicep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide
        direction="left"
        in={true}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <img src={repair} className="services-icon" />
              <div>
                <p className="service-heading">Lifetime Repair</p>
                <p className="servicep">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.{" "}
                </p>
              </div>
            </div>
          </div>
          </Slide>
        </Container>
    </div>
  )
}

export default Services
