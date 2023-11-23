import {
  Container,
  CssBaseline,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import FeaturedPost from "./Components/FeaturedPost";
import { featuredPosts, sidebar } from "./data/Data";
import PostCard from "./Components/PostCard";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Header />
          <FeaturedPost />
          <br />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => {
              return <PostCard post={post} key={post.title} />;
            })}
          </Grid>
          <Grid container sx={{ mt: 3 }}>
            <Main title="From the Fire House" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
        <Footer
          title="Footer"
          description="this website is made by Muhammad Anas Naseer"
        />
      </ThemeProvider>
    </>
  );
}

export default App;
