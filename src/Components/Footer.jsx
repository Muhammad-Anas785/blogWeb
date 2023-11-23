import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = (props) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ bgcolor: 'gray', py: 6 ,mt:2}}>
        <Typography variant="h6" align="center">{props.title}</Typography>
        <Typography variant="subtitle1" align="center">{props.description}</Typography>
      </Container>
    </>
  );
};

export default Footer;
