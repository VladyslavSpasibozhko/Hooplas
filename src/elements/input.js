import React from 'react';

const Input = ({ label, labelClass, error, touched, ...rest }) => {

    return (
        <label className={labelClass}>
            {label}
            <input {...rest}/>
            {
                error && error[rest.name] && touched[rest.name] && <span className='error'>{error[rest.name]}</span>
            }
        </label>
    );
};

Input.defaultProps = {
    label:'',
    labelClass:'',
    error:false,
    touched:false
};

export default Input;