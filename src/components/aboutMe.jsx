import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import data from './variables'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function About(props){

    return(
        <Box sx={{ pt: 10, flexGrow: 1}}>
        <Grid 
        container 
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 2
        }}
         >
          <Grid item size={{ md: 4, sm: 12}}>
            <img height={500} src={require('../static/img/myimage_paper.PNG')} />
          </Grid>
          <Grid item size={{ md: 5, sm: 12}} sx={{ textAlign: "center"}}>
          <Typography color='black' id="bio" variant='body1' sx={{ mb: 0, textAlign: "justify" }}>
              Hello you! My name is <strong>Reyhaneh Ahmadi Nokabadi</strong>.Ever since I was a kid
              , I was fascinated by digital world and technology. Hence, I decided to
              pursue a <strong>Bachelor's degree</strong> in <strong>Computer Engineering</strong>. After working 2+ years
              as a Front-end Developer, I found my passion for Human Computer Intraction and 
              decided to get my <strong>Master's degree</strong> in <strong>Interactive Arts and Technology </strong>
              from Simon Fraser University. During my studies as a <strong>User Experience Researcher</strong>,
              I worked on Learning Analytics Dashboards (LADs) under the supervision of Dr. Marek Hatala.
              I was in charge of a large-scale controlled experiment to analyze the impact of a LAD designed based
              on Social Comparison Theory and compre it to that of the current dashboard students
              used. You can find more detail in Work tab. Besides my passion for UX, I like to spend
              my free time cooking, baking, drawing, painting, or playing board games with my friends.
              
            </Typography>
          </Grid>
        </Grid>

        <Grid 
        container 
        direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
         >
            <Grid item size={{sm: 12}}>
            <Typography className='greeting' variant="h2" sx={{textAlign: "center"}} gutterBottom>
                My Gallery of Creations
            </Typography>
            {/* <img src={require('../static/img/divider.jpg')} width={1000} /> */}
            </Grid>
            {data.images.map((item) => (
             <Grid item size={{ md: 4, sm: 12}} sx={{ textAlign: "center"}}>
                <img
                    src={require(`../static/img/${item}`)}
                    alt={item.title}
                    loading="lazy"
                    width={300}
                />
        </Grid>
      ))}
 
            </Grid>

    
        </Box>
    )
}


