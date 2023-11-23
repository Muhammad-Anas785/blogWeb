import {
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { posts } from "../data/Data";
import Markdown from "markdown-to-jsx";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  divide: {
    backgroundColor: "gray",
    marginBottom: "10px",
    
  },
  mark:{
    marginTop:"10px"
  }
}));

const Main = ({ title }) => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider  theme={theme}>
        <Grid item xs={12} md={8} spacing={2}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Divider className={classes.divide} />
          {posts.map((post) => {
            return <Markdown key={post.body} className={classes.mark}>{post.body}</Markdown>;
          })}
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Main;
