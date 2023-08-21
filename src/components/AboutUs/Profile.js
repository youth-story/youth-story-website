import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function Profile({ name, role, pic, linkedIn }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '280px',
          width: 320,
          backgroundColor: 'white',
          borderColor: '#000',
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#850202">
          {role}
        </Typography>
        <CardCover
          sx={{
            background: `url(${pic})`, // Replace with your image URL
            backgroundSize: 'cover',
            border: '1px solid',
            borderColor: '#777',
            backdropFilter: 'blur(1px)',
            height: '200px', // Set the height of the image
          }}
        ></CardCover>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            border: '1px solid',
            borderColor: '#000',
            backdropFilter: 'blur(1px)',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#fff" m={2} style={{display: 'flex', alignItems: 'center'}}>
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
