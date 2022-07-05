import React, { useEffect, useState } from 'react';
import Intro from '../Intro/Intro';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import "./repostories.css";

const Repostories = () => {


    const [repo, setRepo] = useState([]);

  useEffect(() => {
    getRepo();
  }, []);

  const getRepo = async () => {
    const res = await fetch('https://api.github.com/users/QoriDev/repos');
    const result = await res.json();

    setRepo(result);
  };
  
    return (
        <>
      <Main>
        <Intro />
        <div>
          <Nav />

          <ul className="repositories__list">

          {
            repo.map(el => {
                const { id, name, url, language, updated_at } = el;

                return (
                    <li key={id} className="repository__item">
                        
                        <div className="repository__info">
                        <a className='repository__link' href={url}>{name}</a>
                        <p className="repository__status">{el.private == false ? 'public' : 'private'}</p>

                        </div>

                        <div className="repository__info">
                            <p className="repository__language">{language}</p>
                            <p className="repository_date">Updated: {new Date(updated_at).toISOString()}</p>
                        </div>
                        
                    </li>
                )

            })
          }

          </ul>

        </div>
      </Main>
    </>
    );
};

export default Repostories;