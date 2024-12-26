import "./ContactForm.css"


function ContactForm() {
    return (
        <>
            <div className="contact-form">
                <form>
                    <h1>Send a Massage To Us!</h1>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send Massage</button>
                </form>
            </div>
        </>
    )
}
export default ContactForm;
