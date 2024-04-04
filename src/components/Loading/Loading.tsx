import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './loading.module';
import { spinner } from './loading.module';

const Loading = () => {
  return (
    <Box className='wrapper' sx={spinner}>
      <CircularProgress className='wrapper__spinner' size={'150px'} color='info' />
    </Box>
  );
};

export default Loading;
