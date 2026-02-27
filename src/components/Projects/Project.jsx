import { useState, useRef, useEffect } from "react";
import "./Project.css";

const projects = [
    {
        title: "Trackify",
        desc: "An Academic credit tracker me and my team built for our college...",
        img: "./Mern.webp",
        repo: "https://github.com/arbasil05/Trackify",
        live: "https://trackify.arbasil.me/",
        leftInfo: "800+ active users",
        rightInfo: "Loved for its UI/UX"
    },
    {
        title: "Billing App",
        desc: "A full-stack invoicing app built with Express and MongoDB for generating and managing bills...",
        img: null,
        repo: "https://github.com/arbasil05/Billing-App",
        live: null,
        leftInfo: "Backend only",
        rightInfo: "Auth & CRUD flow"
    },
];

const Project = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const notebookRef = useRef(null);
    const [spiralCount, setSpiralCount] = useState(0);

    useEffect(() => {
        if (notebookRef.current) {
            const notebookHeight = notebookRef.current.offsetHeight;
            const spiralGap = 22;
            const count = Math.floor(notebookHeight / spiralGap);
            setSpiralCount(count);
        }
    }, []);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1 < projects.length ? prev + 1 : prev));
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
    };

    return (
        <div className="Project-Container">
            <div className="Project-Header">
                <h1>Things I have Built</h1>
            </div>

            <div style={{ position: "relative" }}>

                <div>
                    <div className="Flip-Parent">
                        <div className="Flip-Notebook" ref={notebookRef}>
                            <div className="Project1">
                                <h1>{projects[currentPage].title}</h1>
                                <p className="Project1-Desc">{projects[currentPage].desc}</p>
                                {projects[currentPage].img && (
                                    <img
                                        src={projects[currentPage].img}
                                        className="Mern"
                                        alt={projects[currentPage].title}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}

                                <div className="Project-Highlights">
                                    <p><span className="Project-Marker">{projects[currentPage].leftInfo}</span></p>
                                    <p><span className="Project-Marker">{projects[currentPage].rightInfo}</span></p>
                                </div>

                                <div className="Project1-Button">
                                    <div
                                        className="Project1-Repo"
                                        onClick={() =>
                                            window.open(`${projects[currentPage].repo}`, "_blank")
                                        }
                                    >
                                        <p>Repository</p>
                                    </div>

                                    {projects[currentPage].live && (
                                        <div
                                            className="Project1-Live"
                                            onClick={() =>
                                                window.open(`${projects[currentPage].live}`, "_blank")
                                            }
                                        >
                                            <p>Live</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* ⭐ Conditional Arrows */}
                            <div className="Notebook-Arrows">
                                {currentPage > 0 && (
                                    <button onClick={prevPage}>
                                        <img
                                            src="/FB Arrow.webp"
                                            className="Previous"
                                            alt="Previous"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </button>
                                )}

                                {currentPage < projects.length - 1 && (
                                    <button onClick={nextPage}>
                                        <img
                                            src="/FB Arrow.webp"
                                            alt="Next"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </button>
                                )}
                            </div>
                        </div>

                        {[...Array(spiralCount)].map((_, index) => (
                            <img
                                key={index}
                                src="/spiral.webp"
                                className="Spiral"
                                style={{ top: `${index * 22}px` }}
                                loading="lazy"
                                decoding="async"
                                alt="spiral"
                            />
                        ))}
                    </div>
                </div>

                <img src="./Cat.webp" alt="Cat" className="Cat"  loading="lazy"
                                            decoding="async" />
            </div>
        </div>
    );
};

export default Project;
