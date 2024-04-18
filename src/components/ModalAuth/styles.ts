export const modalHeaderStyles = {
  color: 'white',
  fontWeight: '700',
  fontSize: '24px',
  gridArea: 'header'
};
  
export const modalInputsStyles = {
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
    "header header close" auto
    "auth . register" auto
    / auto auto auto `,
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
  
export const submitButtonStyles = {
  placeSelf: 'start',
  margin: '20px 0 0 0',
  padding: 0,
  gridArea: 'submit'
};

export const closeButtonStyles = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  top: '5px',
  right: '15px',
};

export const passwordStyles = [
  modalInputsStyles,
  { gridArea: 'password' },
];

export const loginStyles = [
  modalInputsStyles,
  { gridArea: 'login' },
];

export const emailStyles = [
  modalInputsStyles,
  { gridArea: 'email' },
];

export const registerTextStyles = {
  gridArea: 'register',
  color: 'white',
  placeSelf: 'center',
  textAlign: 'center'
};
  
export const registerLinkStyles = {
  cursor: 'pointer'
};


