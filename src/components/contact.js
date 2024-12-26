import Navbar from "../Module/Navbar";
import Hero from "../Module/Hero";
import HeroImg from "./IMG/6.jpg.jpg"
import Footer from "../Module/Footer";
import ContactForm from "./ContactForm";

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                imgMid="img-mid"
                heroImg={HeroImg}
                title="Contact"
            />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;