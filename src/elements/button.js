import React from 'react';
import T from 'prop-types';
import '../styles/buttonsStyle.css'

const Button = ( { text, ...rest} ) => {
    return (
        <button {...rest} >{text}</button>
    );
};

Button.T = {
  text:T.string.isRequired
};

export default Button;