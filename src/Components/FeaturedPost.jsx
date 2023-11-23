import {
  Button,
  Card,
  CardActions,
  CardContent,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  palette: {
    mode: "dark",
  },
    title:{
       fontFamily:"cursive"
    },
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "35px 25px",
    backgroundSize: "100% 100%",
  },
  textContainer: {
    color: "white",
  }
 
}));

const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
      
        <Card className={classes.cover}>
          <CardContent className={classes.textContainer}>
            <Typography variant="h3" gutterBottom>Title of the longer featured Blog Post</Typography>
            <Typography variant="h6">
              It's not only writers who can benefit from this free online tool.
              If you're a programmer who's working on a project where blocks of
              text are needed, this tool can be a great way to get that. It's a
              good way to test your programming and that the tool being created
              is working well.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.btn}>
              Read More...
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
  );
};

export default FeaturedPost;
