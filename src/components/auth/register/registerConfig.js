import * as yup from 'yup';

export const registerInputData = [
    {
        label:'Email',
        placeholder:'Email',
        type:'email',
        labelClass:'form-input-label',
        className:'form-input',
        name:'email'
    },

    {
        label:'Full Name',
        placeholder:'Full Name',
        type:'text',
        labelClass:'form-input-label',
        className:'form-input',
        name:'displayName'
    },
    {
        label:'Password (8-40 characters)',
        placeholder:'Password',
        type:'password',
        labelClass:'form-input-label',
        className:'form-input',
        name:'password'
    },
    {
        label:'Password',
        placeholder:'Confirm password',
        type:'password',
        labelClass:'form-input-label',
        className:'form-input',
        name:'confirmPassword'
    }
];

export const registerSchema = yup.object().shape({
    email: yup.string()
        .email('Invalid email')
        .required(),
    displayName: yup.string()
        .min('5', 'Short name')
        .required(),
    password: yup.string()
        .min('8', 'Short password')
        .max('40', 'Long password')
        .required(),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], "Passwords don't matches")
        .required(),
});
