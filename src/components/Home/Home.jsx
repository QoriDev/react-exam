import React from "react";
import Card from "../Card/Card";
import Intro from "../Intro/Intro";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <>
      <Main>
        <Intro />
        <div>
          <Nav />
          <Card />
        </div>
      </Main>
    </>
  );
};

export default Home;
