import './Hero.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect } from 'react';


const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const cloud1 = document.querySelector('.cloud');
            const cloud2 = document.querySelector('.cloud2');
            const plane = document.querySelector('.Plane');
            const plane2 = document.querySelector('.Plane2');

            if (cloud1) {
                cloud1.style.transform = `translateY(${window.scrollY * 0.15}px)`;
            }
            if (cloud2) {
                cloud2.style.transform = `translateY(${window.scrollY * -0.45}px)`;
            }

            if(plane){
                plane.style.transform = `translateY(${window.scrollY * 0.10}px)`;
            }

            if(plane2){
                plane2.style.transform = `translateY(${window.scrollY * -0.25}px)`;
            }


        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <div className='Hero-Container'>


                <img src="./cloud1.png" className='cloud' />
                <img src="./cloud1.png" className='cloud2' />
                <img src="./Plane.png" className='Plane' />
                <img src="./Plane2.png"  className='Plane2'/>


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
