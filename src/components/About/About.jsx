import React, { useEffect, useState, useRef } from 'react';
import './About.css';

const About = () => {
  const [curYear, setYear] = useState(0);
  const [click, setClick] = useState(false);
  const paperRef = useRef(null);

  // Set the current year
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  // Generate torn paper edges
  useEffect(() => {
    const generateTornEdges = () => {
      const paper = paperRef.current;
      if (!paper) return;

      const step = 5;
      const roughness = 3;

      const width = paper.offsetWidth;
      const height = paper.offsetHeight;

      let points = [];

      // Top Edge
      for (let x = 0; x <= width; x += step) {
        let y = Math.random() * roughness;
        points.push(`${x}px ${y}px`);
      }
      // Right Edge
      for (let y = 0; y <= height; y += step) {
        let x = width - (Math.random() * roughness);
        points.push(`${x}px ${y}px`);
      }
      // Bottom Edge
      for (let x = width; x >= 0; x -= step) {
        let y = height - (Math.random() * roughness);
        points.push(`${x}px ${y}px`);
      }
      // Left Edge
      for (let y = height; y >= 0; y -= step) {
        let x = Math.random() * roughness;
        points.push(`${x}px ${y}px`);
      }

      paper.style.clipPath = `polygon(${points.join(',')})`;
    };

    generateTornEdges();
    window.addEventListener('resize', generateTornEdges);

    return () => window.removeEventListener('resize', generateTornEdges);
  }, []);

  return (
    <div className="About-Container" id='Me'>
      <div className="About-Header">
        <h1>Myself</h1>
      </div>
      <img src="./shavings.webp" loading='lazy' decoding='async' className='shavings' alt='shavings' />
      <video autoPlay loop muted playsInline className='video' preload='auto'>
        <source src='./Knight.webm' type='video/webm' />
      </video>
      <div className="paper-shadow-wrapper">
        <div className="tape"></div>
        <div className="torn-paper" ref={paperRef}>
          <div className="About-Desc">
            I'm a <span className='Highlighter'>{curYear - 2005}-year-old developer</span> who builds websites from front to back or as people like to call it, full-stack.
            <br /><br />
            Right now I'm doing my Bachelor's in Computer Science and Engineering at <span className='Highlighter'>Saveetha Engineering College</span>.
            <br /><br />
            If the stars align and my GPA behaves, I'll be graduating in 2027.
          </div>
        </div>
      </div>

      {
        !click && <img src='./Mosquito1.webp' className='Mosquito' loading='lazy' decoding='async' alt='mosquito' onClick={() => setClick(true)} style={{ cursor: "pointer" }} />
      }

      {
        click && (
          <>

            <img src='./Mosquito.webp' loading='lazy' decoding='async' className='Mosquito' alt='mosquito' />
            <img src="./Blood.webp" loading='lazy' decoding='async' className='Mosquito-Blood' alt='blood' />
          </>
        )

      }

    </div>
  );
};

export default About;
