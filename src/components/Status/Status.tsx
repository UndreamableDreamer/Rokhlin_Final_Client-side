import { Alert, AlertTitle } from '@mui/material';

import { ErrorMessageInterface } from '../../types/types';

export const Status = ({ error, severity }: ErrorMessageInterface) => {
  const message = severity === 'info' ? 'Info' : 'Error';
  return (
    <Alert className='alert-box' severity={severity}>
      <AlertTitle className='alert-box__title'>{message}</AlertTitle>
      {error}
    </Alert>
  );
};
