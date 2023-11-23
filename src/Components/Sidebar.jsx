import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const Sidebar = ({ archives, title, description, social }) => {
  return (
    <>
      <Grid item xs={12} md={4} sx={{padding:"10px 10px"}}>
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey'}}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>

        <Typography variant="h6" gutterBottom>
          Archives
        </Typography>
        {archives.map((archive) => {
          return (
            <>
              <Link
                display="block"
                variant="body1"
                href={archive.url}
                key={archive.title}
              >
                {archive.title}
              </Link>
              
            </>
          );
        })}
        <Typography variant="h6" gutterBottom>
          Social
        </Typography>
        {social.map((network) => {
          return (
            <>
              <Link display="block" variant="body1" href="#" key={network.name}>
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <network.icon />
                  </Grid>
                  <Grid item> {network.name}</Grid>
                </Grid>
              </Link>
              
            </>
          )
        })}
      </Grid>
    </>
  );
};

export default Sidebar;
