import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import ItemCard from './card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

library.add(faUserGraduate)

export default function Education(){
    return(
        <Box sx={{ flexGrow: 1 }} id="education-box">
        <Grid container alignItems="center" justifyContent="center" rowSpacing={3}>
        <Grid item size={{ xs: 4 }} alignItems="initial" justifyContent="center" className='education-icon'>
            <FontAwesomeIcon icon="fa-solid fa-user-graduate" size='lg' />
        </Grid>
        <Grid item size={{ xs: 8 }}>
            <Box sx={{mx: 8}}>

            <Typography color='#040f21' variant='h5'>
                M.Sc - Interactive Arts & Technology
            </Typography>

            <Typography variant='h6' sx={{fontStyle: 'italic', fontFamily: 'Roboto'}}>
                Simon Fraser University, 2022 - 2024
            </Typography>
            </Box>
        </Grid>

        <Grid item size={{ xs: 4 }} alignItems="initial" justifyContent="center" className='education-icon'>
            <FontAwesomeIcon icon="fa-solid fa-user-graduate" size='lg' />
        </Grid>
        <Grid item size={{ xs: 8 }}>
            <Box sx={{mx: 8}}>

            <Typography color='#040f21' variant='h5'>
                B.Sc - Computer Engineering
            </Typography>

            <Typography color='#040f21' variant='h6' sx={{fontStyle: 'italic', fontFamily: 'Roboto'}}>
                Isfahan University of Technology, 2016 - 2021
            </Typography>
            </Box>
        </Grid>
        </Grid>        
        </Box>
    )
}