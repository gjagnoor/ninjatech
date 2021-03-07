import React, { useEffect } from "react"
import { Link } from "gatsby"
import Masking from "../components/Masking.js";
import { Button } from "@material-ui/core"
import Loadable from "@loadable/component"

const Masking = Loadable(() => import("../components/Masking.js"), { ssr: false })

const IndexPage = () => {
  return (
    // <div id="headcontainer">
    <div className="container">
      <div
        id="landingimg"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <center>
          <Link to="/home" id="enterlink">
            <Button
              variant="contained"
              style={{ zIndex: 1, textDecoration: "none", boxShadow: "none" }}
              id="enterbutton"
            >
              Enter
            </Button>
          </Link>
        </center>
        <center>
          <p id="orscroll">or scroll</p>
        </center>
      </div>

      <Masking />
    </div>
    // </div>
  )
}

export default IndexPage
