import { Box, Card, CardContent, Skeleton, Stack } from '@mui/material'

export default function SkeletonArticles({includeInput}: {includeInput: boolean}) {
  const skeletonItems = Array.from({ length: 6 }, (_, i) => i)

  const skeletonElements = skeletonItems.map(index => (
    <Card sx={{ maxWidth: 400, borderRadius: 2 }} key={index}>
      <Stack spacing={0}>
        <Skeleton variant="rectangular" height={160} animation="wave" />
          <CardContent>
            <Stack spacing={0}>
              <Skeleton variant="text" width="30%" height={28} animation="wave" />
              <Skeleton variant="text" width="100%" height={40} animation="wave"
              sx={{m: 0}} />
              <Skeleton variant="text" width="100%" height={100} animation="wave" />
            </Stack>
          </CardContent>
      </Stack>
    </Card>
  ))

  return (
    <>
      {includeInput && 
        <>
          <Skeleton variant="text" sx={{ fontSize: '1rem', width: '180px' }} />
          <Skeleton variant="text" sx={{ fontSize: '2.75rem', width: '310px', mb: "0.75em" }} />
        </>}
      <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
      }}
    >
      {skeletonElements}
    </Box>
    </>
  )
}