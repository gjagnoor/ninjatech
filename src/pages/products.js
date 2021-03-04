import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from "../components/Home.js"
import Products from "../components/Products.js"

const Products_ = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Products />
  </Layout>
)

export default Products_
