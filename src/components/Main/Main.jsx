import React from 'react';
import "./main.css"

const Main = (props) => {
    const {children} = props;
    return (
        <>
            <main>
                <div className="container">
                <section className='sections'>
                    {children}
                </section>
                </div>
            </main>
        </>
    );
};

export default Main;