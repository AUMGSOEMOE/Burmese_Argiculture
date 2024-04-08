import React from "react";
import { Blog, Container, Navigation } from "../components";

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Blog />
      </Container>
    </div>
  );
};

export default HomePage;
