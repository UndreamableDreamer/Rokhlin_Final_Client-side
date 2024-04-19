import { Alert, AlertTitle } from '@mui/material';

import { ErrorMessage } from '../../types/system-interfaces';

const Status = ({ error, severity }: ErrorMessage) => {
  const message = severity === 'info' ? 'Info' : 'Error';
  return (
    <Alert className='alert-box' severity={severity}>
      <AlertTitle className='alert-box__title'>{message}</AlertTitle>
      {error}
    </Alert>
  );
};

export default Status;
