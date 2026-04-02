import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import data from './variables'
import { Link } from 'react-router-dom';

export default function Work(props){
    return(
        <Box 
            sx={{ flexGrow: 1, pt: 10 }} 
            id="work-box" 
        >
        <Grid container rowSpacing={3}>
            <Grid size={{ xs: 12 }}>
                <Box mx={{ md: 10, xs: 3 }} mb={2}>
                <Typography color="primary" variant="h4" sx={{ fontWeight: 600 }}>
                    Experience
                </Typography>
                </Box>
            </Grid>
        </Grid>
            {
                data.data.map((i, idx) => 
                    <Card
                      key={idx}
                      elevation={0}
                      sx={{
                        my: 4,
                        mx: { md: 10, xs: 2 },
                        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 16px 40px rgba(45, 90, 142, 0.12)',
                          borderColor: 'primary.light',
                        },
                      }}
                    >
                    <Grid  container className="intro" alignItems="center" justifyContent="center" spacing={0} >
                    <Grid size={{ md: 3, sm: 12}}>
                       <Box component="img" height={140} alt="" src={i.icon} sx={{ display: 'block', mx: 'auto' }} />
                    </Grid>
                    <Grid size={{ md: 8, sm: 12}}>

                    <CardContent >
                    <Typography gutterBottom variant="h3" >
                        {i.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {i.abstract}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to={i.link}>
                        <Button size="small">Learn More</Button>
                    </Link>
                    </CardActions>
                </Grid>
                </Grid>
                </Card>


                )
            }

        </Box>
    )
}


// <a href="https://www.flaticon.com/free-icons/business-intelligence" title="business intelligence icons">Business intelligence icons created by zero_wing - Flaticon</a>