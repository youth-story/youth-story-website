import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyles = {
    color: '#B81A1A',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      label="Password"
      variant="outlined"
      fullWidth
      margin="normal"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
        style: inputStyles
      }}
    />
  );
};

export default PasswordField;
