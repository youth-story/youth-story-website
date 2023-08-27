
import React, { useState, useEffect } from 'react';
import InputForm from '../InputForm';
import axios from 'axios';
import './Form.css';
import InputLabel from '@mui/material/InputLabel';
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

const Form = ({message, data, changeValue, errorMessage, submitSignupForm}) => {

  const [loading, setLoading] = useState(false);

  const inputStyles = {
    color: '#B81A1A',
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpForm = async (e) => {
    if (!loading) {
      setLoading(true);

      await submitSignupForm(e);

      setLoading(false);
    }
  };

  return(
    <form className='form'>
      <p style={{color: 'red'}}>{message}</p>
      <RoundedTextField
      label="Name"
      id="name"
      value={data.name}
      variant="outlined"
      InputProps={{ style: inputStyles }}
      fullWidth
      margin="normal"
      onChange={(e)=>changeValue("name", e.target.value)}
    />
    <InputLabel style={{color: 'red'}} htmlFor="name">{errorMessage.name}</InputLabel>
      <RoundedTextField value={data.username} id="username" onChange={(e)=>changeValue("username", e.target.value)} label="Username" variant="outlined" InputProps={{ style: inputStyles }} fullWidth margin="normal" />
      <InputLabel style={{color: 'red'}} htmlFor="username">{errorMessage.username}</InputLabel>
      <RoundedTextField value={data.email} id="email" onChange={(e)=>changeValue("email", e.target.value)} label="Email" variant="outlined" InputProps={{ style: inputStyles }} fullWidth margin="normal" />
      <InputLabel style={{color: 'red'}} htmlFor="email">{errorMessage.email}</InputLabel>
      <RoundedTextField
      value={data.password}
      id="password"
      onChange={(e)=>changeValue("password", e.target.value)}
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
    <InputLabel style={{color: 'red'}} htmlFor="password">{errorMessage.password}</InputLabel>
      <button onClick={(e)=>{handleSignUpForm(e)}} type="submit" className="submit-button" disabled={loading}>
      {loading ? 'Signing Up...' : 'Sign Up!'}
      </button>
    </form>
  );
}

export default Form;