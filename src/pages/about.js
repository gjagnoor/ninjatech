import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import About from "../components/About.js"
import Convince from "../components/Convince.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4 id="heading">About Us</h4>
    <PagesHome />
    <About />
    <Convince />
  </Layout>
)

export default IndexPage
