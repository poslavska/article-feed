import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, } from '@mui/material';
import { ArrowForward, CalendarToday} from '@mui/icons-material';

import type { ArticleType } from '../types';
import { formatDate } from '../helpers';

export default function ArticleCard({id, image_url, published_at, summary, title}: ArticleType) {
  return (
    <Card sx={{ 
      maxWidth: 400, 
      height: 530, 
      mb: "1.5em",
      display: 'flex',
      flexDirection: 'column',
     }}>
      <CardMedia
        component="img"
        alt={title}
        height="217"
        image={image_url}
      />
      <CardContent sx={{ pt: { xs: 2, md: 3}, 
        pl: { xs: 2, md: 3},
        pr: { xs: 2, md: 3},
        pb: 0,
        color: "#363636",
        }} >
        <Typography variant='body2' component="p" sx={ {
          display: 'flex',
          alignItems: 'center'
        } }> 
          <CalendarToday fontSize="small" sx={{ mr: "8px" }} /> 
          {formatDate(published_at)}
        </Typography>
        <Typography gutterBottom variant="h3" 
          sx={{
            mb: { xs: "0.75em", sm: "0.83em"}, 
            mt: { xs: "0.825em", sm: "1em"},
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical', 
          }} >
          {title}
        </Typography>
        <Typography variant="body1" component="p"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
          }} >
          {summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ 
        pt: "1.25em",
        pl: { xs: 2, md: 3},
        pr: { xs: 2, md: 3},
        pb: "1.5em",
        mt: 'auto',
      }} >
        <Button sx={{
          '& .MuiButton-endIcon': {
            marginLeft: '8px',
          },
           p: 0,
           textTransform: "none",
           fontSize: "0.8125rem",
           fontWeight: 700,
          }} size="small" endIcon={<ArrowForward />}>Read more</Button>
      </CardActions>
    </Card>
  )
}