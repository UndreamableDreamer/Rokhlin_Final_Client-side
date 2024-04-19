const modalInputs = {
  '& .MuiFormLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)'
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: '#1976d2'
  },
  '&:not(:focus)': {
    color: 'white',
  },
  '& input::placeholder': {
    color: 'white',
  },
  '& .MuiInput-input': {
    color: 'white',
  },
  borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
};

export const authWrapper = {
  gridArea: 'auth',
  rowGap: '7px',
  display: 'grid',
  gridTemplate: `
    "login"
    "email"
    "password"
    "helper"
    "submit" `,
};

export const submitButton = {
  placeSelf: 'start',
  marginTop: '5px',
  padding: 0,
  gridArea: 'submit',
  '&:hover': {
    backgroundColor: 'rgba(179, 216, 218, 0.24)'
  },
};
  
export const passwordStyles = [
  modalInputs,
  { gridArea: 'password' },
];

export const loginStyles = [
  modalInputs,
  { gridArea: 'login' },
];

export const emailStyles = [
  modalInputs,
  { gridArea: 'email' },
];

export const helperText = {
  marginTop: '10px',
  fontSize: '12px',
  color: 'red',
  gridArea: 'helper'
};
