import React, { useEffect, useState } from "react";
import Button from "../FormUI/Button";
// import Photo from "../../images/my-photo.jpg"
import "./intro.css"

import { NavLink } from "react-router-dom"

const Intro = () => {

  const [user, setuser] = useState([]);

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    const res = await fetch('https://api.github.com/users/QoriDev');
    const result = await res.json();

    setuser(result);
  };

  const { name, login, avatar_url, following, followers } = user;

  return (
    <>
      <div className="intro-wrap">
        <img className="intro-img" src={avatar_url} alt="my photo" width={300} height={300} />
        <h2 className="intro-title">{name}</h2>
        <p className="intro-desc">{login}</p>
        <Button>
            Edit profile
        </Button>
        <NavLink className="intro-link " to="/followers">{`${followers} followers`}</NavLink>
        <NavLink className="intro-link" to="/">{ `${following} following`}</NavLink>
      </div>
    </>
  );
};

export default Intro;
