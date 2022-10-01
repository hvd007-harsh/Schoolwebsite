import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import { CardContent, Card , Box} from '@mui/material';

export const Gallery = () => {
  return (
    <div> 
    <Carousel>
             <div>
                <img  src="./img/cdc-GDokEYnOfnE-unsplash.jpg" alt="LIBRARY" />
                <p className="legend">LIBRARY</p>
            </div>
            <div>
                <img  src={"./img/cdc-gsRi9cWCIB0-unsplash.jpg"} alt="LIBRARY" />
                <p className="legend">LIBRARY</p>
            </div>
            <div>
                <img  src={"./img/kenny-eliason-zFSo6bnZJTw-unsplash.jpg"} alt="LIBRARY" />
                <p className="legend">LIBRARY</p>
            </div>
            <div>
                <img  src={"./img/m-monk-E813FON0wDQ-unsplash.jpg"} alt="LIBRARY" />
                <p className="legend">LIBRARY</p>
            </div>
            <div>
                <img  src={"./img/mche-lee-PC91Jm1DlWA-unsplash.jpg"} alt="LIBRARY" />
                <p className="legend">LIBRARY</p>
            </div>
    </Carousel>
    <Box m={2} pt={20}>
    <h3 >Gallery</h3>
    <Card sx={{ justifyContent : "space-around" , display: "flex" , marginTop: "200"}}>
     <CardContent>
       Our Classroom is the one unique classroom Highly specialized and most advance 
       the classroom is highly tech and highly featured and the active teachers make enivorment 
       of the classroom . 
       My classroom has unique teacher who introduced the lecturs more effeciently and enivorment is so green and 
       advance so beautifull. 
     </CardContent>
    </Card>
    </Box>
    </div>
  )
}
