import React, { useContext, useEffect, useState } from "react";
import Intro from "../Intro/Intro";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import "./followers.css"
// import context from '../../context';

const Followers = () => {

  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await fetch('https://api.github.com/users/aibrohim/followers');
    const result = await res.json();

    setdata(result);
  };

  return (
    <>
    
      <Main>
        <Intro />
        <div>
          <Nav />

          <ul className="followers__list">
          {
            data.length > 0 ? 
            data.map(el => {

              const {id, login, html_url, avatar_url } = el;
             
              return (
                <li key={id} className="follower__item">
                  <img className="follower__img" src={avatar_url} alt={login} width={60} height={60} />
                <a className="follower__link" href={html_url} target="_blank">{login}</a>

                <button className="follower__btn" >follow</button>
              </li>
              )
            }) : <li>You dont have any followers yet :(</li>
          }
          </ul>

        </div>
      </Main>
    </>
  );
};

export default Followers;
