import Navbar from "../Module/Navbar";
import Hero from "../Module/Hero";
import HeroImg from "./IMG/about_hero.jpg"
import Footer from "../Module/Footer";
import AboutUs from "./AboutUs";

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                imgMid="img-mid"
                heroImg={HeroImg}
                title="About"
            />
            <AboutUs />
            <Footer />
        </>
    )
}
export default About;