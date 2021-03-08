import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import image from "../images/loading.gif"

const IndexPage = () => (
  <div id="loadingscreen">
    <img src={image} />
  </div>
)

export default IndexPage
