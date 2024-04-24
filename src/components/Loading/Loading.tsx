import { Box, CircularProgress } from '@mui/material';

import { spinner } from './styles';

const Loading = () => {
  return (
    <Box className='wrapper' sx={spinner}>
      <CircularProgress className='wrapper__spinner' size={'150px'} color='info' />
    </Box>
  );
};

export default Loading;
