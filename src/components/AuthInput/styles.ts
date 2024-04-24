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
