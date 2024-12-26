import Navbar from "../Module/Navbar";
import Hero from "../Module/Hero";
import HeroImg from "./IMG/night.jpg.jpg"
import Footer from "../Module/Footer";
import Aboutus from "./AboutUs";

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
            <Aboutus />
            <Footer />
        </>
    )
}
export default About;