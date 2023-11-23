import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card
              className={classes.card}
              sx={{ backgroundColor: "gray", color: "white" }}
            >
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                  </Typography>

                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>

                  <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                    Continue Reading...
                  </Typography>
                </CardContent>
              </div>

              <CardMedia
                image={post.image}
                title={post.imageTitle}
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
              />
            </Card>
          </CardActionArea>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default PostCard;
