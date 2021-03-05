import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import Products from "../components/Products.js"
import ProductsSlider from "../components/ProductsSlider.js"

const Products_ = () => (
  <Layout>
    <SEO title="Home" />
    <h4 id="heading">Products</h4>
    <PagesHome />
    <Products />
    <ProductsSlider />
  </Layout>
)

export default Products_
