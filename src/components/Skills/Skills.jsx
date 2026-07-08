import { useEffect } from 'react';
import './Skills.css'

const Skills = () => {

  const groups = [
    {
      title: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "#FFD6A5"
    },
    {
      title: "Backend",
      items: ["Django", "Node.js", "Express.js", "FastAPI", "REST APIs"],
      color: "#A7E6FF"
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "#C8F7C5"
    },
    {
      title: "Tools & Platforms",
      items: ["Git & GitHub", "Docker", "Redis", "Postman"],
      color: "#E8C4F7"
    }
  ];


  return (
    <>
      <div className='Skills-Container' id='skillz'>
        <h1 className='Skills-Header'>Stuffs I Know</h1>
        <img src="./Balloon.webp" alt="Balloon" className='Balloon'  loading="lazy"
                                            decoding="async" />

        <div className="Sticky">
          {groups.map((group, index) => {

            const randomRotation = `${Math.random() * 6 - 3}deg`;

            return (
              <div
                key={index}
                className="Note"
                style={{
                  backgroundColor: group.color,
                  transform: `rotate(${randomRotation})`,
                  position: "relative"
                }}
              >
                {/* Push pin for each note */}
                <img
                  src="./Push-Pin.webp"
                  className="Push-Pin"
                  alt="pin"
                  loading='lazy'
                  decoding='async'
                />

                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
