import { Alert, AlertTitle } from '@mui/material';
import { ErrorMessageInterface } from '../../types/types';

export const Error = ({ error }: ErrorMessageInterface) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
};

export const NoData = ({ error }: ErrorMessageInterface) => {
  return (
    <Alert severity="info">
      <AlertTitle>+-(</AlertTitle>
      {error}
    </Alert>
  );
};
