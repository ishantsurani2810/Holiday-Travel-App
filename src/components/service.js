import Navbar from "../Module/Navbar";
import Hero from "../Module/Hero";
import HeroImg from "./IMG/2.jpg.jpg"
import Footer from "../Module/Footer";
import Trip from "./Trip";

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                imgMid="img-mid"
                heroImg={HeroImg}
                title="Service"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service;