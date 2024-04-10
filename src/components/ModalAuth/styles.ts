export const modalHeaderStyles = {
  color: 'white',
  fontWeight: '700',
  fontSize: '24px',
  gridArea: 'header'
};
  
export const modalFieldsStyles = {
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
  marginLeft: '10px',
};
  
export const modalBoxStyles = {
  position: 'absolute',
  display: 'grid',
  gridTemplate: `
    "header header header" auto
    "login . register" auto
    "email . register" auto
    "password . register" auto
    "submit . register" auto
    / auto auto auto `,
  gridAutoColumns: 'fit-content(300px), auto',
  gap: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  backgroundColor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
  
export const submitButton = {
  placeSelf: 'start',
  margin: '15px 0 0 0',
  padding: 0,
  gridArea: 'submit'
};
  
export const loginStyles = [
  modalFieldsStyles,
  { gridArea: 'login' },
];
  
export const passwordStyles = [
  modalFieldsStyles,
  { gridArea: 'password' },
];

export const emailStyles = [
  modalFieldsStyles,
  {gridArea: 'email'},
];

export const register = {
  gridArea: 'register',
  color: 'white',
  placeSelf: 'center',
  textAlign: 'center'
};
  
export const registerLink = {
  cursor: 'pointer'
};


