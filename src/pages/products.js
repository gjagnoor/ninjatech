import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PagesHome from "../components/PagesHome.js"
import Products from "../components/Products.js"
import ProductsSlider from "../components/ProductsSlider.js"
import PagesWallpaper from "../components/PageWallpaper"
import Home from "../components/Home"

const Products_ = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h4 id="heading">Products</h4>
      <PagesHome firstComp={<PagesWallpaper />} secondComp={<Home />} />
      <Products />
      <ProductsSlider />
    </Layout>
  )
}

export default Products_
