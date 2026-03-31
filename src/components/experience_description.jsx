import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import colors from './variables'


export default function Description(props) {
  return (
    <Card sx={{ minWidth: 275 }} className="work-card">
      <CardContent>
        <Typography variant='h5' gutterBottom sx={{ color: colors.primary }}>
          {props.title}
        </Typography>
        <Typography variant="body2">
            {props.abstract}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}