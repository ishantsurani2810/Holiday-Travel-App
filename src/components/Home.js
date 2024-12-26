import "../Module/Herostyle.css"
import Navbar from "../Module/Navbar";
import Hero from "../Module/Hero";
import HeroImg from "./IMG/11.jpg.jpg"
import Destination from "./Destination";
import Trip from "./Trip";
import Footer from "../Module/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={HeroImg}
                title="Your Journy Your Story"
                text="Choose Your Favourite Destination. "
                btntext="Travel Plan"
                url="/"
                btnclass="show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home;