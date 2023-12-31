
import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
 
function Copyright(props) {
    return (
      <Typography variant="body1" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


export default Copyright;