import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
// import './Profile.css';

export default function Profile({ name, role, pic, linkedIn }) {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        transformStyle: 'preserve-3d', // Add this line to preserve 3D space for child elements
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        transform: 'rotateY(15deg)', // Apply rotation by default
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '280px',
          width: 320,
          backgroundColor: 'white',
          borderColor: '#000',
          transform: 'inherit', // Inherit the parent's transform to maintain the tilt effect
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#850202">
          {role}
        </Typography>
        <CardCover
          sx={{
            background: `url(${pic})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
            height: '200px',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)',
            transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)', // Apply scaling and translation by default
          }}
        ></CardCover>
        <CardContent
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            // background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            // border: '1px solid',
            // borderColor: '#000',
            // backdropFilter: 'blur(1px)',
            transform: 'translate3d(45px, 50px, 40px)', // Apply translation by default
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#850202" m={2} style={{display: 'flex', alignItems: 'center'}}>
            {name}{
              <a href={linkedIn} style={{ marginLeft: '10px' }}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                  alt="LinkedIn Logo"
                  style={{ width: '50px', height: '50px' }}
                />
              </a>
            }
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
