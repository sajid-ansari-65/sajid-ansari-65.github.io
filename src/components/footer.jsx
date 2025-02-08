import React from "react";
import "../App.css";
import { Container,  Grid2,  Stack,  Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#f7f7f7',
    borderTop: '1px solid #e0e0e0',
    display: 'flex',
    bottom: 0,
    position: 'static',
    width: '100%',
    padding: '20px 50px'
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <Grid2 container className={classes.footer}>
        <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between">
              <Stack direction="row" alignItems={'center'} spacing={2}>
                <Typography variant="body1" color="textSecondary">
                  Made with ❤️ by 
                  <Link color="inherit" href=""></Link>
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <Link color="inherit" href="https://iamsajidansari.com/">
                    Sajid Ansari
                  </Link>
                </Typography>
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Typography variant="body1" color="textSecondary" sx={{fontWeight: 700}}>
                    Email:
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <Link color="inherit" href="mailto:sajidansari0605@gmail.com">
                    sajidansari0605@gmail.com
                  </Link>
                </Typography> 
              </Stack>
              <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={1}>
                  <Link color="#e0e0e0" target="_blank" to="https://www.linkedin.com/in/sajidansari0605/" >
                    <LinkedInIcon />
                  </Link>
                  <Link color="#e0e0e0" target="_blank" to="https://github.com/sajid-ansari-65">
                    <GitHubIcon />
                  </Link>
                  <Link color="#e0e0e0" target="_blank" to="https://x.com/sajidansari0605">
                    <XIcon />
                  </Link>
              </Stack>
            </Stack>
        </Container>      
  </Grid2>
  );
}

export default Footer;
