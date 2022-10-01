import React from 'react'
import Card from '@mui/material/Card';
import { CardMedia,CardContent } from '@mui/material';
import "./Main.css";

export const History = () => {
  return (
    <div>
      <h3>Advertiments and History</h3>
       <div className='Trophies row'>
        <Card sx={{ maxWidth: 345 }}>
         <CardMedia 
          component="img"
          height="200"
          image='https://img.freepik.com/free-vector/black-hands-holding-champions-cup-human-character-winning-yellow-golden-trophy-flat-vector-illustration-celebrating-competition-concept-banner-website-design-landing-web-page_74855-20935.jpg?w=2000'
          alt='Trophy'
         />
         <CardContent>Science Achievement</CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} >
          <CardMedia 
          component="img"
          height="200"
          image='https://img.freepik.com/free-vector/black-hands-holding-champions-cup-human-character-winning-yellow-golden-trophy-flat-vector-illustration-celebrating-competition-concept-banner-website-design-landing-web-page_74855-20935.jpg?w=2000'
          alt='Trophy'
         />
         <CardContent>Math Achievement</CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia 
          component="img"
          height="200"
          image='https://img.freepik.com/free-vector/black-hands-holding-champions-cup-human-character-winning-yellow-golden-trophy-flat-vector-illustration-celebrating-competition-concept-banner-website-design-landing-web-page_74855-20935.jpg?w=2000'
          alt='Trophy'
         />
         <CardContent>Art Achievement</CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia 
          component="img"
          height="200"
          image='https://img.freepik.com/free-vector/black-hands-holding-champions-cup-human-character-winning-yellow-golden-trophy-flat-vector-illustration-celebrating-competition-concept-banner-website-design-landing-web-page_74855-20935.jpg?w=2000'
          alt='Trophy'
          />
          <CardContent>Picture Achievement</CardContent>
        </Card>
       </div>

    </div>
  )
}
