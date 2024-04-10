import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { spinner } from './styles';

const Loading = () => {
  return (
    <Box className='wrapper' sx={spinner}>
      <CircularProgress className='wrapper__spinner' size={'150px'} color='info' />
    </Box>
  );
};

export default Loading;
