import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Grow from '@mui/material/Grow';

export default function Intro(props) {
    return (
      <Box sx={{ pt: 12, flexGrow: 1 }}>
        <Grid 
        container 
        alignItems="center" 
        justifyContent="center" 
        sx={{ gap: 2 }} >
          <Grid size={{ md: 6, sm: 12}}>
            <Grow in timeout={700}>
              <Box>
            <Typography className='greeting' variant="h1">
                Hi, I'm Reyhaneh.
            </Typography>
            <Typography color='black' id="role" variant='h6'>
              I am a  
              <strong> UX Researcher </strong>
              with a backgorund in <strong>Front-end Development</strong>
            </Typography>
            <Typography color='black' id="bio" variant='body1' sx={{ mb: 0 }}>
              2+ years experienceing working as a <strong> UX Researcher </strong>
              at <strong> Simon Fraser University </strong> working on Learning Analytics Dashboards 
              and their impact on students' motivation and emotions.
            </Typography>
              </Box>
            </Grow>
          </Grid>
          <Grid size={{ md:4, sm: 10}}>
            <Grow in timeout={900} style={{ transformOrigin: 'center top' }}>
              <Box>
                <Box
                  component="img"
                  src={require("../static/img/IMG_1397.JPG")}
                  id="my-image"
                  alt="Reyhaneh Ahmadi Nokabadi"
                  sx={{
                    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
                    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 12px 40px rgba(17, 5, 90, 0.15)',
                    },
                  }}
                />
              </Box>
            </Grow>
          </Grid>
        </Grid>

      </Box>
    );
  }