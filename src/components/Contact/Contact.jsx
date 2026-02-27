import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
    const noteRef = useRef(null);
    const [positions, setPositions] = useState([]);
    const [copied, setCopied] = useState(false);

    const email = "arbasil64.ab@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    useEffect(() => {
        const updateSpirals = () => {
            if (!noteRef.current) return;

            const noteWidth = noteRef.current.offsetWidth;
            const ringWidth = 60;
            const gap = 20;

            const totalRings = Math.floor(noteWidth / (ringWidth + gap)) - 1;

            const newPositions = [];
            for (let i = 0; i < totalRings; i++) {
                const percent = ((i * (ringWidth + gap)) / noteWidth) * 100;
                newPositions.push(percent);
            }
            setPositions(newPositions);
        };

        updateSpirals();
        window.addEventListener("resize", updateSpirals);
        return () => window.removeEventListener("resize", updateSpirals);
    }, []);

    return (
        <div className='Contact-Container' id="contact">
            <div className="Contact-Header">
                <h1>Get to know me</h1>
            </div>
            <div className='Contact-Parent'>
                {positions.map((leftPos, i) => (
                    <img
                        key={i}
                        src="./Binder.webp"
                        className="Binder"
                        style={{ left: `${leftPos}%` }}
                        loading='lazy'
                        decoding='async'
                        alt='binder'
                    />
                ))}

                <div className="Contact-Note" ref={noteRef}>

                    {/* EMAIL */}
                    <div className="Contact-Item">
                        <div className="Item-Header">
                            <p>Email</p>
                            <img src="./Mail.webp" alt="mail icon" loading='lazy' decoding='async' />
                        </div>
                        <div className="Email-Row">
                            <p className="Item-Value">{email}</p>
                            <button className="Copy-Btn" onClick={copyEmail} title="Copy email">
                                {copied ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#26347F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* LINKEDIN */}
                    <div className="Contact-Item">
                        <div className="Item-Header">
                            <p>LinkedIn</p>
                            <img src="./LinkedIn.webp" alt="LinkedIn" id="LinkedIn" loading='lazy' decoding='async' />
                        </div>
                        <p className="Item-Value">
                            <a href="https://www.linkedin.com/in/abdur-rahman-basil-14114a288/" target="_blank">
                                 Visit my LinkedIn profile
                            </a>
                        </p>
                    </div>

                    {/* GITHUB */}
                    <div className="Contact-Item">
                        <div className="Item-Header">
                            <p>GitHub</p>
                            <img src="./Github_Contact.webp" alt="Github" id="Github-Icon" loading='lazy' decoding='async' />
                        </div>
                        <p className="Item-Value">
                            <a href="https://github.com/arbasil05" target="_blank">
                                github.com/arbasil05
                            </a>
                        </p>
                    </div>

                    {/* GITHUB */}
                    <div className="Contact-Item">
                        <div className="Item-Header">
                            <p>Leetcode</p>
                            <img src="./Leetcode.webp" alt="Leetcode" id="Github-Icon" loading='lazy' decoding='async' />
                        </div>
                        <p className="Item-Value">
                            <a href="https://leetcode.com/AR_Basil/" target="_blank">
                                leetcode.com/AR_Basil
                            </a>
                        </p>
                    </div>

                    <img src="./Pen.webp" loading='lazy' decoding='async' className="Pen" alt='pen' />
                    <img src="./Scribble.webp" loading='lazy' decoding='async' className="Scribble" alt='scribble' />

                </div>
            </div>
            <img src="./Stain.webp" loading='lazy' decoding='async' className="Stain" alt='stain' />
        </div>
    );
};

export default Contact;
