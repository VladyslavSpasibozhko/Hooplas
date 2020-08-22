import * as yup from 'yup';

export const loginInputsData = [
    {
        label:'Email',
        placeholder:'Email',
        type:'email',
        labelClass:'form-input-label',
        className:'form-input',
        name:'email'
    },
    {
        label:'Password',
        placeholder:'Password',
        type:'password',
        labelClass:'form-input-label',
        className:'form-input',
        name:'password'
    },
];

export const loginSchema = yup.object().shape({
    email: yup.string()
        .email('Invalid email')
        .required(),
    password: yup.string()
        .min('6', 'Short password')
        .max('40', 'Long password')
        .required(),
});

// confirm: yup.bool()
//     .oneOf([true], 'Confirm with our rules')