import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className='Hero-Container'>

                {/* Polaroid Image Card */}
                <div className="Image-Card">
                    <div className="Image-Inside-Card">
                        <img src="public/Hero-Image.jpeg" alt="Basil" />
                    </div>
                    <img src="public/tape.png" alt="tape" className="Tape" />
                    <p className='Image-Name'>Me :)</p>
                </div>

                <div className='Hero-Text Pencil-Color'>
                    <div className='Intro-Text'>
                        <h1>Hi, I'm Basil</h1>
                        <p>Chennai, Tamil Nadu</p>
                    </div>
                    <div className='Hero-Description'>
                        <p>Pre-final year CSE Student trying <br />not to be unemployed</p>
                        <img src="public/Paper-Clip.png" className='Paper-Clip' alt="clip" />
                    </div>
                    <div className='Button-Parent'>
                        <div className="button">
                            Contact Me
                        </div>
                        <div className='Github-Button-Container'>
                            <div className="Git-button">
                                Github
                            </div>
                            <img src="./Github.png" className='Github' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
