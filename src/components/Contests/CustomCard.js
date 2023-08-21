import React from 'react';
import './CustomCard.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCard = ({ title, subTitle, startDate, endDate, imageUrl }) => {
  return (
    <Card className='card-container'>
      <CardMedia
        component="img"
        alt="Image"
        height="200"
        className='image'
        image={imageUrl}
      />
      <CardContent className='card-content'>
        <Typography className='title' gutterBottom variant="h5" component="div">
          <span>{title}</span>- <span style={{fontSize: '1.3rem', fontWeight: 'normal'}}>{subTitle}</span>
        </Typography>
        <div className='dates'>
          <Typography className='startDate' variant="body2" color="text.secondary">
            Start: {startDate} 
          </Typography>
          <Typography className='endDate' variant="body2" color="text.secondary">
            End: {endDate}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
