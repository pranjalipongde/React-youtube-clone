import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography} from '@mui/material';

const Feed = () => {
  return (
    <Stack sx= {{ flexDirection: {
      sx: "column", md: "row"
    }}}>
      {/* sidebar */}
      <Box sx={{ height: { sx: 'auto', md:'92hv'}, borderRight: '1px solid #3d3d3d', px: { sx: 0, md:2}}}>
        Sidebar

        <Typography className='copyright' variant='body' sx={{ mt:1.5, color:'#fff'}}>
          Copyright 2023 Youtube Clone
        </Typography>
      </Box>

    </Stack>
  )
}

export default Feed