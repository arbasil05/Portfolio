import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
    const noteRef = useRef(null);
    const [positions, setPositions] = useState([]);

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
        <div className='Contact-Container'>
            <div className="Contact-Header">
                <h1>Contact</h1>
            </div>

            <div className='Contact-Parent'>
                {positions.map((leftPos, i) => (
                    <img
                        key={i}
                        src="./Binder.png"
                        className="Binder"
                        style={{ left: `${leftPos}%` }}
                    />
                ))}

                <div className="Contact-Note" ref={noteRef}>

                    {/* EMAIL */}
                    <div className="Contact-Item">
                        <div className="Item-Header">
                            <p>Email</p>
                            <img src="./Mail.png" alt="" />
                        </div>
                        <p className="Item-Value">arbasil64.ab@gmail.com</p>
                    </div>

                    {/* LINKEDIN */}
                    <div className="Contact-Item">
                        <div className="Item-Header">
                            <p>LinkedIn</p>
                            <img src="./LinkedIn.png" alt="" id="LinkedIn" />
                        </div>
                        <p className="Item-Value">
                            <a href="https://linkedin.com/in/arbasil05" target="_blank">
                                Click Here
                            </a>
                        </p>
                    </div>

                    {/* GITHUB */}
                    <div className="Contact-Item">
                        <div className="Item-Header">
                            <p>GitHub</p>
                            <img src="./Github_Contact.png" alt="" id="Github-Icon" />
                        </div>
                        <p className="Item-Value">
                            <a href="https://github.com/arbasil05" target="_blank">
                                github.com/arbasil05
                            </a>
                        </p>
                    </div>

                    <img src="./Pen.png" className="Pen"/>
                    <img src="./Scribble.png" className="Scribble" />

                </div>
            </div>
        </div>
    );
};

export default Contact;
