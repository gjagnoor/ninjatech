import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4 id="heading">Contact Us</h4>
    <PagesHome />
  </Layout>
)

export default IndexPage
