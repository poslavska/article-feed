import React from 'react'
import '../css/ArticlePage.css'
import type { RootState } from '../redux-state/store'
import { useSelector } from 'react-redux'
import { Button, CardActions, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

type ArticlePageProps = {
  setArticleClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ArticlePage({ setArticleClicked}: ArticlePageProps) {
  const article = useSelector((state: RootState) => state.articles.currentArticle)

  return (
    <section className='page-container'>
      <img src={article.image_url} alt={article.title} className='page-img' />
      <div className='page-main'>
        <Typography gutterBottom variant="h3" 
          sx={{
            mb: "2.5em",
            textAlign: "center"
          }} >
          {article.title}
        </Typography>
        <Typography variant="body1" component="p">
          {article.summary}
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam eligendi hic perspiciatis corrupti ea.
        </Typography>
        <Typography variant="body1" component="p">
          Exercitationem officia dicta officiis praesentium esse, adipisci porro temporibus corrupti nisi sint nemo iure ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eum consectetur possimus!
        </Typography>
        <Typography variant="body1" component="p">
          Perferendis similique, odit aliquam sit deserunt vel architecto eligendi illum cumque corrupti consequuntur ex minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, totam.
        </Typography>
      </div>
      <CardActions sx={{ 
        pt: "2.25em",
        pl: { xs: 7, sm: 13, md: 15, lg: 24},
        pb: "1.5em",
        mt: 'auto',
        alignSelf: 'start'
      }}>
      <Button sx={{
        '& .MuiButton-startIcon': {
          marginRight: '8px',
        },
        p: 0,
        textTransform: "none",
        fontSize: "0.8125rem",
        fontWeight: 700,
        }} size="small" startIcon={<ArrowBack />}
        onClick={() => setArticleClicked(false)}
        >Back to homepage</Button>
      </CardActions>
    </section>
  )
}