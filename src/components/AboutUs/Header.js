import React, { useState, useEffect, useCallback } from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

const Header = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoadedCallback = useCallback(async container => {
    await console.log(container);
    setParticlesLoaded(true);
  }, []);

  useEffect(() => {
    if (particlesLoaded) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [particlesLoaded]);

  const scrollToMission = () => {
    const component2 = document.getElementById('mission');
    if (component2) {
      component2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='about-header-container'>
      <div className='particles-container'>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoadedCallback}
          options={{
            background: {
              color: {
                value: 'white', // Change background color to white
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: '#FF0000', // Change particles color to red
              },
              links: {
                color: '#FF0000', // Change particles links color to red
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 20,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <h1 style={{ alignSelf: 'center' }}>
        Begin your Journey: from{' '}
        <span className='gradient-text'>dreaming</span> to <br />
        achieving <strong>success</strong>
      </h1>
      <br />
      <p style={{ fontWeight: '500', whiteSpace: 'normal' }}>
        A community for youth that features a bi-monthly magazine, tips from young entrepreneurs, a social forum and much
        more...
      </p>
      <br />
      <Button
        variant='contained'
        size='large'
        onClick={scrollToMission}
        style={{ backgroundColor: 'black', color: 'white', borderRadius: '5px', mouse: 'pointer' }}
      >
        The Mission {'>'}
      </Button>
    </div>
  );
};

export default Header;
