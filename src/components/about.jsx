import React, { Fragment } from "react";
import "../App.css";

import { Button, Container, Grid2, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function About() {

  return (
    <Fragment>
      <Grid2 container spacing={3} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',}}> 
          <Container maxWidth="lg">
            <Stack direction="column" alignItems={'center'} gap={5}>
              <Stack direction="row" alignItems={'center'} >
                <img src="/images/profile.png" alt="Sajid Ansari"  width={350} style={{ borderRadius: '50%',  
                    background: 'linear-gradient(#BCED91 49%, transparent 49%), linear-gradient(-45deg, white 33%, transparent 33%) 0 50%, white linear-gradient(45deg, white 33%, #BCED91 33%) 0 50%',
                    backgroundRepeat: 'repeat-x',
                    backgroundSizw: '1px 100%, 40px 40px, 40px 40px',
                    position: 'relative',
                    marginY:'4px',
                    backgroundColor: '#171717',
                    padding: '10px',
                    color: '#FFFFFF'}} />
              </Stack>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Button variant="contained" color="primary"><Link style={{ textDecoration: 'none', color: 'white'}} to={`/projects`}> My Projects </Link> </Button>
              </Stack>
              <Stack alignItems={'left'} spacing={1}>
                <Typography variant="h1" fontSize={40} fontWeight={700} >Mohammad Sajid Ansari</Typography>
                <Typography variant="caption" color="textSecondary" fontWeight={700}>Who am I?</Typography>
                <Typography variant="body1" color="textSecondary">
                a Fullstack web developer and pro-efficient WordPress Developer, Started his WordPress Journey around January 2016 after completing my B.Tech(IT) Graduation from a reputed college in Bardoli (CGPIT, Maliba Campus, UTU).
                </Typography>
                <br/>
                <Typography variant="caption" color="textSecondary" fontWeight={700}>What I do?</Typography>
                <Typography variant="body1" color="textSecondary">
                In my career, I have worked with many clients and companies and have developed many WordPress websites and plugins. I have also worked with many WordPress themes and have developed many custom themes for my clients, and also have developed many custom plugins for my clients.
                </Typography>
              </Stack>
            </Stack>
          </Container>
      </Grid2>
    </Fragment>
  );
}

export default About;
