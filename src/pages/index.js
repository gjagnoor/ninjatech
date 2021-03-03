import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/Home.js"
import Features from "../components/Features.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Features />
  </Layout>
)

export default IndexPage
