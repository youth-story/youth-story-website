
import React, { useState, useEffect } from 'react';
import InputForm from '../InputForm';
import axios from 'axios';
import './Form.css';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import {baseUrl} from '../../utils/index';
import PasswordField from './PasswordField';
import { styled } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RoundedTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 20px;
    background-color: white; 
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }
`;

const RedIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    color: red; /* Apply red color to the icon */
  }
`;

const Form = () => {

  const inputStyles = {
    color: '#B81A1A',
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return(
    <form className='form'>
      <RoundedTextField label="Username" variant="outlined" InputProps={{ style: inputStyles }} fullWidth margin="normal" />
      <RoundedTextField
      label="Password"
      variant="outlined"
      type={showPassword ? 'text' : 'password'}
      fullWidth
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <RedIconButton
              onClick={toggleShowPassword}
              edge="end"
              aria-label="toggle password visibility"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </RedIconButton>
          </InputAdornment>
        ),
        style: inputStyles
      }}
    />
    <div className='misc'>
      <div className='remember-forgot'>
        <div className='remember-me'>
          <input type='checkbox' id='remember' name='remember' />
          <label htmlFor='remember' className='red-label'>
            Remember Me
          </label>
        </div>
        <div className='forgot-password'>
          <label htmlFor='forgot' className='red-label'>
            Forgot Password?
          </label>
        </div>
      </div>
   </div>
      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  );
}

export default Form;