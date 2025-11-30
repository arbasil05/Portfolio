import './Skills.css'

const Skills = () => {

  const groups = [
    {
      title: "Frontend",
      items: ["React", "HTML / CSS / JavaScript", "Tailwind CSS", "TypeScript", "Shadcn/UI"],
      color: "#FFF475"
    },
    {
      title: "Backend",
      items: ["Express", "Django"],
      color: "#A7E6FF"
    },
    {
      title: "Tools & Hosting",
      items: ["Git & GitHub", "Vercel", "Render"],
      color: "#C8F7C5"
    }
  ];

  return (
    <>
      <div className='Skills-Container'>
        <h1 className='Skills-Header'>Skills</h1>

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
                  src="./Push-Pin.png"
                  className="Push-Pin"
                  alt="pin"
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
