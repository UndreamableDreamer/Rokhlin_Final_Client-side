import { TextField } from '@mui/material';

import { AuthInputProps } from './auth.props';
import { emailStyles, loginStyles, passwordStyles } from './styles';

enum EnumTypes {
  login = 'Login',
  email = 'Email',
  password = 'Password',
}

const AuthInput = ({inputType}: AuthInputProps) => {
  const type = EnumTypes[inputType];

  const possibleTypes = {
    Login: { 
      style: loginStyles,
      type: 'text',
      className: 'form_login-field'
    },
    Email: { 
      style: emailStyles,
      type: 'email',
      className: 'form_email-field'
    },
    Password: { 
      style: passwordStyles,
      type: 'password',
      className: 'form_password-field'
    }
  };

  return (
    <TextField
      required
      name={inputType}
      label={type} 
      sx={possibleTypes[type].style}
      type={possibleTypes[type].type}
      variant='standard'
      className={possibleTypes[type].className}
    />
  );
};

export default AuthInput;
