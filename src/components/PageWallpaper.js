import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import Slide from "@material-ui/core/Slide"
import VisibilitySensor from "react-visibility-sensor"
import { Button } from "@material-ui/core"

const PagesWallpaper = () => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    setVisibility(visiblity)
  }
// carousel slide starts here
  return (
    <VisibilitySensor partialVisibility onChange={onChange}>
      <div id="wallpaper">
        <Slide in={isVisible} timeout={{ enter: 3000 }}>
          <p id="wallpaperp">
            Snapdragon 821|128 GB ROM, 14.48 cm (5.7 inch) Display| 23MP Rear
            Camera| 8MP Front Camera| 3300 mAh Polymer Battery
            <span>
              <br />
              <br />
              <span>
                {" "}
                <Link to="/products#products">
                  <Button variant="contained">Learn More</Button>
                </Link>
              </span>
            </span>
          </p>
        </Slide>
      </div>
    </VisibilitySensor>
  )
}
// carousel slide ends here 

export default PagesWallpaper
