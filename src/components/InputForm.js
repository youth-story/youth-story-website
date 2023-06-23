import React, { useState } from 'react';
import './InputForm.css';
import { TextField, IconButton, InputAdornment, makeStyles } from '@material-ui/core';
import { Visibility, VisibilityOff, Person, Email } from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    formArea: {
      display: 'flex',
      flexDirection: 'column',
    },
    error: {
        color: 'red',
        fontSize: '2.2vh',
        marginBottom: '2vh',
    },
    inputField: {
        flexGrow: 1,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '20px',
        border: 'none',
        width: '100%',
        height: '100%',
        fontSize: '125%',
        backgroundColor: 'transparent',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        color: 'white',
        marginBottom: '1vh',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '2px',
          left: '2px',
          right: '2px',
          bottom: '2px',
          backdropFilter: 'blur(5px)',
          zIndex: '-1',
        },
        '& .MuiInputBase-root': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          outline: 'none',
          border: 'none',
          color: 'white',
          padding: '8px 12px',
        },
        '& .MuiInputBase-input::placeholder': {
          color: 'white',
        },
      },    
  }));

export default function InputForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const getIcon = (fieldName) => {
    switch (fieldName) {
      case 'name':
        return <Person />;
      case 'email':
        return <Email />;
      case 'username':
        return <AccountCircle />;
      default:
        return null;
    }
   };

  return (
    <div className={classes.formArea}>
      <TextField
        className={classes.inputField}
        InputLabelProps={{ className: classes.inputLabel }}
        type={props.type === 'password' && !showPassword ? 'password' : 'text'}
        name={props.name}
        value={props.value}
        onChange={props.Change}
        placeholder={props.placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {getIcon(props.name)}
            </InputAdornment>
          ),
          endAdornment:
            props.type === 'password' && (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
        }}
      />
      <label className={classes.error}>{props.errorMessage}</label>
    </div>
  );
}
