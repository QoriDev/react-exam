import React, { useEffect, useState } from 'react';
import "./card.css"
// import URL from "../../API/URL"

const Card = () => {

    const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await fetch('https://api.github.com/users/QoriDev/repos');
    const result = await res.json();

    setdata(result);
  };

  console.log(data);


    return (
        <>
            <div className="cards">
                <h2 className="cards-title"> Popular repositories </h2>
                <ul className="cards-list">
                    
                    {
                        data.map(el => {
                            const { id, name, url, language} = el;

                            return (
                            <li key={id} className="cards-item">
                                <div className="item__info">
                                <a className="cards-link" href={url}>{name}</a>
                                <p className="cards-desc" >{el.private == false ? 'Public' : 'Private'}</p>
                                </div>
                                <p className="item__language">{language}</p>
                            </li>
                            )
                        })
                    }

                    {/* <li className="cards-item">
                        <a className="cards-link" href="">scoot</a>
                        <p className="cards-desc" >public</p>
                    </li>
                   <li className="cards-item">
                        <a className="cards-link" href="">create-a-product-using-java-script</a>
                        <p className="cards-desc" >public</p>
                    </li>
                    <li className="cards-item">
                        <a className="cards-link" href="">coffee-roasters</a>
                        <p className="cards-desc" >public</p>
                    </li>
                    <li className="cards-item">
                        <a className="cards-link" href="">online-zoo</a>
                        <p className="cards-desc" >public</p>
                    </li>
                    <li className="cards-item">
                        <a className="cards-link" href="">js-exam</a>
                        <p className="cards-desc" >public</p>
                    </li> */}
                    
                </ul>
            </div>
        </>
    );
};

export default Card;