export const modalHeaderStyles = {
  color: 'white',
  fontWeight: '700',
  fontSize: '24px',
  gridArea: 'header'
};
  
export const modalBoxStyles = {
  position: 'absolute',
  display: 'grid',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 350,
  columnGap: '30px',
  backgroundColor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  paddingLeft: '20px',
  paddingRight: '20px',
  pt: 2,
  px: 4,
  pb: 3,
};

export const registerModalStyle = [ 
  modalBoxStyles, {
    gridTemplate: `
    "header"
    "auth"
    `,
  }];

export const loginModalStyle = [
  modalBoxStyles, {
    gridTemplate: `
    "header ."
    "auth register"
  `,
  }];
  
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

export const registerTextStyles = {
  gridArea: 'register',
  color: 'white',
  placeSelf: 'center',
  textAlign: 'center'
};
  
export const registerLinkStyles = {
  cursor: 'pointer'
};


