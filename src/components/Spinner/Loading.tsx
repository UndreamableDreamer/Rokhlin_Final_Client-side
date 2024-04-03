import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './Loading.css';

const Loading = () => {
  return (
    <Box className='spinner' sx={{ display: 'flex' }}>
      <CircularProgress size={'150px'} color='info' />
    </Box>
  );
};

export default Loading;
