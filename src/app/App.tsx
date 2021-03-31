import React, { ReactElement } from "react";
import { Grid } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Board from "../components/Board/Board";

function App(): ReactElement {
  return (
    <Grid
      templateColumns="1fr"
      templateRows="4.8rem 1fr 3.2rem"
      gap={6}
      height="100vh"
    >
      <Header />
      <Board />
      <Footer />
    </Grid>
  );
}

export default App;
