import "./Herostyle.css"

function Hero(props) {
    return (
        <>
            <div className={props.cName} >
                <img alt="Hero Img" className={props.imgMid} src={props.heroImg} />
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnclass} >
                        {props.btntext}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero;