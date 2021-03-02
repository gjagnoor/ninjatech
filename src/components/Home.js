import { Link } from "gatsby"
import React from "react"
import homeBackground from "../images/home-background.png";

const Home = () => {
    return (
        <section id="home">
            <center>
                <h5 id="ninjatech">Ninja Tech</h5>
            </center>
            <img id="home-background" className="responsive" src={homeBackground} />
        </section>
    );
}

export default Home
