import React, { useState, useEffect } from 'react';

export default function Heading() {
  const skills = ['Coders', 'Entrepreneurs', 'Researchers', 'Artists', 'Creators', 'Millionaires'];
  const [skill, setSkill] = useState(skills[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true); // Trigger fade-out effect
      setTimeout(() => {
        const currentIndex = skills.indexOf(skill);
        const nextIndex = (currentIndex + 1) % skills.length;
        setSkill(skills[nextIndex]); // Change the skill after the fade-out effect
        setFade(false); // Trigger fade-in effect
      }, 500); // Wait for 500ms for the fade-out effect to complete
    }, 2000);

    return () => clearTimeout(timeout);
  }, [skill, skills]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#30D5C8',
      }}
    >
      <div>
        <h1>
          Unleash the potential of today's youth - the dreamers, creators, and innovators of tomorrow.
          <br />
          Join Youth Story, a vibrant community of <strong style={{color: '#696969', transition: 'opacity 0.5s ease', opacity: fade ? 0 : 1,}}>{skill}</strong>, where every talent finds its voice.
        </h1>
        <br />
        Together, we redefine the possibilities and shape a world of limitless opportunities.
      </div>
    </div>
  );
}
