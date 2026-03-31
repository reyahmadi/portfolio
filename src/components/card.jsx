import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import colors from './variables'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ItemCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} className="work-card">
      <CardContent>
        <Typography variant='h5' gutterBottom sx={{ color: colors.primary }}>
          {props.title}
        </Typography>
        {/* <Typography variant="body2">
            {props.desc}
        </Typography> */}
        {props.keywords?.map((k) => 
            <Chip label={k} variant="outlined" color={colors.primary} />
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
