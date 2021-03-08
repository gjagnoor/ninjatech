import React, { useEffect } from "react"
import { Link } from "gatsby"
// import Masking from "../components/Masking.js";
import { Button } from "@material-ui/core"
import loadable from "@loadable/component"
const Masking = loadable(() => import("../components/Masking.js"))

const IndexPage = () => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        console.log("scrollin")
        document.body.style.setProperty(
          "--scroll__",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        )
      },
      false
    )
  }, [])
  return (
    // <div id="headcontainer">
    <div className="container">
      <div
        id="landingimg"
        style={{ display: "flex", justifyContent: "space-around"}}
      >
        <center>
          <Link to="/home" id="enterlink">
            <Button
              variant="contained"
              style={{ zIndex: 1, textDecoration: "none", boxShadow: "none", backgroundColor:"#3bba9c", color: "#2e3047" }}
              id="enterbutton"
            >
              Enter
            </Button>
          </Link>
          <center>
          <p id="orscroll">or scroll</p>
        </center>
        </center>
        
      </div>

      <Masking />
    </div>
    // </div>
  )
}

export default IndexPage
