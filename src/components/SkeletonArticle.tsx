import { Box, Skeleton } from '@mui/material'

export default function SkeletonArticle() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 0,
        width: '100%',
      }}
    >
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height={245} 
        animation="wave"
      />
      <Box
        sx={{
          mt: -9,
          width: '80%',
          maxWidth: 1200,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          pt: 2, pb: 2, pl: 1, pr: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Skeleton variant="text" width="60%" height={40} sx={{ mx: 'auto' }} animation="wave" />

        <Skeleton variant="text" width="100%" height={20} sx={{ mt: 4}} animation="wave" />
        <Skeleton variant="text" width="100%" height={20} animation="wave" />
        <Skeleton variant="text" width="90%" height={20} animation="wave" />
        <Skeleton variant="text" width="95%" height={20} animation="wave" />
      </Box>
      <Box sx={{ 
        mt: 2, pt: "1em", 
        pl: { xs: 7, sm: 13, md: 15, lg: 24}, 
        alignSelf: 'start' 
      }}>
        <Skeleton variant="rounded" width={120} height={36} animation="wave" />
      </Box>
    </Box>
  )
}
