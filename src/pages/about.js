import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/Home.js"
import About from "../components/About.js"
import Convince from "../components/Convince.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Convince />
  </Layout>
)

export default IndexPage
