import './Hero.css';
import { useRef, useState, useEffect } from 'react';

const Hero = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        if (!isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0.5;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const cloud1 = document.querySelector('.cloud');
            const cloud2 = document.querySelector('.cloud2');
            const plane = document.querySelector('.Plane');
            const plane2 = document.querySelector('.Plane2');

            if (cloud1) cloud1.style.transform = `translateY(${window.scrollY * 0.15}px)`;
            if (cloud2) cloud2.style.transform = `translateY(${window.scrollY * -0.45}px)`;
            if (plane) plane.style.transform = `translateY(${window.scrollY * 0.10}px)`;
            if (plane2) plane2.style.transform = `translateY(${window.scrollY * -0.25}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='Hero-Container'>
                <img src="/cloud1.webp" className='cloud' alt="" loading="lazy" decoding="async" />
                <img src="/cloud1.webp" className='cloud2' alt="" loading="lazy" decoding="async" />
                <img src="/Plane.webp" className='Plane' alt="" loading="lazy" decoding="async" />
                <img src="/Plane2.webp" className='Plane2' alt="" loading="lazy" decoding="async" />

                {/* Video */}
                <video
                    ref={videoRef}
                    onClick={handleVideoClick}
                    onEnded={handleVideoEnded}
                    onLoadedMetadata={handleLoadedMetadata}
                    muted
                    playsInline
                    className='video2'
                    style={{ cursor: isPlaying ? "default" : "pointer" }}
                >
                    <source src='./waving.webm' />
                </video>

                {/* Polaroid Image Card */}
                <div className="Image-Card">
                    <div className="Image-Inside-Card">
                        <img
                            src="/Hero-Image.webp"
                            alt="Basil"
                            loading="eager"
                            decoding="async"
                            width="350"
                            height="450"
                        />
                    </div>
                    <img src="/Stamp.webp" alt="Stamp" className='Stamp' loading='lazy' decoding='async' />
                    <img src="/tape.webp" alt="tape" className="Tape" loading="lazy" decoding="async" />
                    <p className='Image-Name'>Me :)</p>
                </div>

                {/* Hero Text and Buttons */}
                <div className='Hero-Text Pencil-Color'>
                    <div className='Intro-Text'>
                        <h1>Hi, I'm Basil</h1>
                        <p>Full Stack Dev</p>
                    </div>

                    <div className='Hero-Description'>
                        <p>Pre-final year CSE Student trying <br />not to be unemployed</p>
                        <img src="/Paper-Clip.webp" className='Paper-Clip' alt="clip" loading="lazy" decoding="async" />
                    </div>

                    <div className='Button-Parent'>
                        {/* Resume Button */}
                        <div
                            className='Github-Button-Container Resume-Button-Container'
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/Basil_Resume.pdf";
                                link.download = "Basil_Resume.pdf";
                                link.click();
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="Git-button">Resume</div>
                            <img src="/Resume.webp" className='Resume-Icon' alt="Resume icon" loading="lazy" decoding="async" />
                        </div>

                        {/* Github Button */}
                        <div className='Github-Button-Container'>
                            <div
                                className="Git-button"
                                onClick={() => window.open("https://github.com/arbasil05", "_blank")}
                            >
                                Github
                            </div>
                            <img src="/Github.webp" className='Github' alt="Github icon" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
