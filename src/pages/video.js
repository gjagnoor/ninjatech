import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/Home.js"
import Video from "../components/Video.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Video />
  </Layout>
)

export default IndexPage
