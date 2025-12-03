import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import { motion } from 'motion/react';

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
      <div className="paper-shadow-wrapper">
        <div className="tape"></div>
        <div className="torn-paper" ref={paperRef}>
          <div className="About-Desc">
            <div className='About-SVG'>

              <svg width="1317" height="473" viewBox="0 0 1317 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeIn"
                  }}
                  viewport={{ once: true }}
                  d="M840.498 7.47975C707.092 17.3036 37.2139 235.471 9.49795 312.521C-27.0422 414.102 448.659 468.384 676.863 465.054C818.678 464.388 1354.52 399.656 1305.89 312.521C1255.35 221.964 915.998 72.3554 657.998 91.1767C509.302 85.682 273.682 94.4776 255.998 104.48" stroke="#FF0101" strokeOpacity="0.552941" strokeWidth="15" />
              </svg>





            </div>
            I'm a <span className=''>{curYear - 2005}-year-old developer</span> who builds websites from front to back or as people like to call it, full-stack.
            <br /><br />
            Right now I'm doing my Bachelor's in Computer Science and Engineering at
            <motion.span
              // ERROR WAS HERE: You had width: "0% 100%"
              initial={{ backgroundSize: "0% 100%" }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className='Highlighter'
            >
              Saveetha Engineering College.
            </motion.span>
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
