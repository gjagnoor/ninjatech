import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "../components/Navigation.js"

// navbar header starts here
const Header = ({ siteTitle }) => (
  <header>
    <Navigation />
  </header>
)

// navbar header ends here

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
