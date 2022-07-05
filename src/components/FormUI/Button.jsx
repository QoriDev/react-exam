import React from 'react';
import "./button.css"

const Button = ({children}) => {
    return (
        <>
            <button className="button btn d-block">{children}</button>
        </>
    );
};

export default Button;