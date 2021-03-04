/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "@material-ui/core/Container"
import map from "../images/HTML USE IMAGE/map.png"
import Input from "@material-ui/core/Input"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Header from "./header"
import "./layout.css"
import { SettingsSystemDaydreamRounded } from "@material-ui/icons"
import { white } from "@material-ui/core/colors"
import { Button } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: 0,
    padding: 0,
    "& .MuiInput-underline": {
      borderBottom: "1px solid white",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid pink",
    },
    display: "flex",
    flexDirection: "column",
  },
  type: {
    marginLeft: "1em",
  },
})
const Contact = ({ children }) => {
  const classes = useStyles()
  const [name, setName] = useState("")

  function handleSignUp() {
    alert(" Thank you for contacting us! We will get back to you shortly")
  }

  return (
    <Container maxWidth="xl">
      <div>
        <center
          style={{
            top: "10em",
            position: "relative",
          }}
        >
          <footer>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
              id="footer"
            >
              <div>
                <img src={map} />
              </div>
              <div style={{ marginLeft: "3%" }}>
                <h5
                  style={{
                    textAlign: "left",
                    fontSize: "1.3em",
                    fontFamily: "twcenmt",
                  }}
                >
                  How to Contact Us
                </h5>
                <p style={{ textAlign: "left", marginBottom: 0 }}>
                  leave your contact details we will contact you
                </p>
                <p style={{ textAlign: "left" }}>
                  within an hour for a detailed consultation.
                </p>
                <form
                  id="registration-form"
                  onSubmit={handleSignUp}
                  className={classes.root}
                >
                  <Input
                    defaultValue="Name"
                    inputProps={{ "aria-label": "description" }}
                    style={{ color: "white" }}
                  />
                  <Input
                    defaultValue="Email"
                    inputProps={{ "aria-label": "description" }}
                    style={{ color: "white" }}
                  />
                  <Input
                    defaultValue="Message"
                    inputProps={{ "aria-label": "description" }}
                    style={{ color: "white", marginBottom: "1em" }}
                  />
                  <Button type="submit" variant="contained">
                    Leave Message
                  </Button>
                </form>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <div>
                    <p style={{ textAlign: "left", marginTop: "1em" }}>
                      Phone : +91-945-5568-341{" "}
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Location : DLF Promenade 62 street
                    </p>
                    <p style={{ textAlign: "left" }}>
                      Open hours : Daily , 8:00am - 9:00 pm
                    </p>
                  </div>
                  <div>
                    <div style={{ marginTop: "1em" }}>
                      <form
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          flexDirection: "column",
                          justifyContent: "space-around",
                        }}
                      >
                        <Input
                          defaultValue="Email"
                          inputProps={{ "aria-label": "description" }}
                          style={{ color: "white", marginBottom: "1em" }}
                        />
                        <Button variant="contained">
                          Subscribe to Updates
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </center>
      </div>
    </Container>
  )
}

export default Contact
