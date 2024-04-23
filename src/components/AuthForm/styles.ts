

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
  


export const helperText = {
  marginTop: '10px',
  fontSize: '12px',
  color: 'red',
  gridArea: 'helper'
};
