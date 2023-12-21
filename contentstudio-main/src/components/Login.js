import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function BasicTextFields() {
  return (
    <div style={{
      margin : '0px',
      width: '100%',
          height: '90vh',
          // borderRadius: '30px',
          // backgroundImage: 'url("https://media.istockphoto.com/id/547137498/photo/wrting-great-content-concept.jpg?s=612x612&w=0&k=20&c=8KYd36QK0nyQRM_l_S0MG4_bGFSk59IPeI9fWp0G-f8=")', // Placeholder image URL
          backgroundSize: 'cover',
    }}>
      <div
        style={{
          marginLeft: '400px',
          marginRight: '10px',
          marginTop: '25px',
          color: 'BLACK',
          padding: '100px',
          width: '270px',
          // border:'2px solid black'
          
        }}
      >
        <div>
          <h1>Login</h1>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 5, width: '35ch', height: '5px' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              type="email"
              label="Email"
              placeholder="Email Address"
              variant="outlined"
              style={{
                height: '0.2px',
                width: '300px',
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              placeholder="Password"
              style={{
                height: '0.2px',
                width: '300px',
              }}
            />

            <Link to="">
              <p>Forgot Password? </p>
            </Link>
            <Link to="/" className="link">
              <Button
                variant="contained"
                style={{
                  width: '40ch',
                  height: '50%',
                  textAlign: 'center',
                  marginLeft: '-14%',
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
}
