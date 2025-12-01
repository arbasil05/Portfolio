import { useState, useRef, useEffect } from "react";
import "./Project.css";

const projects = [
    {
        title: "Trackify",
        desc: "An Academic credit tracker me and my team built for our college...",
        img: "./Mern.webp",
        repo: "https://github.com/arbasil05/Trackify",
        live: "https://trackify-lxxl.vercel.app/",
        leftInfo: "Has 600+ users!",
        rightInfo: "People loved the UI/UX"
    },
    {
        title: "Diabetica",
        desc: "Diabetes prediction app using logistic regression...",
        img: "./Django.webp",
        repo: "https://github.com/arbasil05/Diabetica---final",
        live: null,
        leftInfo: "Got me into Django",
        rightInfo: "Was a newbie, learnt a lot"
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
                <div className="project-info-left">
                    <p>{projects[currentPage].leftInfo}</p>
                </div>

                <div>
                    <div className="Flip-Parent">
                        <div className="Flip-Notebook" ref={notebookRef}>
                            <div className="Project1">
                                <h1>{projects[currentPage].title}</h1>
                                <p className="Project1-Desc">{projects[currentPage].desc}</p>
                                <img src={projects[currentPage].img} className="Mern" alt={projects[currentPage].title} loading="lazy" decoding="async" />
                                <div className="Project1-Button">
                                    <div className="Project1-Repo" onClick={()=>window.open(`${projects[currentPage].repo}`,"_blank")}>
                                        <p>Repository</p>
                                    </div>
                                    {projects[currentPage].live && (
                                        <div className="Project1-Live" onClick={()=>window.open(`${projects[currentPage].live}`,"_blank")}>
                                            <p>Live</p>
                                        </div>
                                    )}

                                </div>
                            </div>

                            {/* Navigation Arrows inside the notebook */}
                            <div className="Notebook-Arrows">
                                <button onClick={prevPage} disabled={currentPage === 0}>
                                    <img src="/FB Arrow.webp" className="Previous" alt="Previous" loading="lazy" decoding="async" />
                                </button>

                                <button onClick={nextPage} disabled={currentPage === projects.length - 1}>
                                    <img src="/FB Arrow.webp" alt="Next" loading="lazy" decoding="async" />
                                </button>
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
                <div className="project-info-right">
                   <p>{projects[currentPage].rightInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default Project;
