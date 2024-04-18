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
  margin: '5px 0px 0px 10px'
};

export const authWrapper = {
  gridArea: 'auth',
  display: 'grid',
  gridTemplate: `
    "login" auto
    "email" auto
    "password" auto
    "submit" auto
    / auto `,
};

export const submitButton = {
  placeSelf: 'start',
  margin: '20px 0 0 0',
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
