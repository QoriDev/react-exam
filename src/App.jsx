import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import Repostories from "./components/Repostories/Repostories";
import Followers from "./components/Followers/Followers";
import Error from "./components/Error/Error";
import context from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import URL from "./API/URL";

const App = () => {

const Context = context.context;

  // const [github, setGithub] = useState([]);

  // useEffect(() => {
  //   getGithub();
  // }, []);

  // const getGithub = async () => {
  //   const res = await fetch(URL.URL);
  //   const result = await res.json();

  //   setGithub(result);
  // };

  const text = "hello context"


  return (
    <>
      <Context.Provider value={text}>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repostories" element={<Repostories />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>

      </Context.Provider>
    </>
  );
};

export default App;
