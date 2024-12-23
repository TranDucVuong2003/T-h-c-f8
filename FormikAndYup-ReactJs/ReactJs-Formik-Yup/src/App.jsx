import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import './App.css'


function App() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Your name must be at least 5 characters ! ')
                .max(25, 'Your name must be under 25 characters')
                .required('You must fill in this section!'),
        
            email: Yup.string()
                .email("Invalid Email !")
                .required('You must fill in this section!'),
        
            password: Yup.string()
                .min(8, 'Your password must be at least 8 characters ! ')
                .required('You must fill in this section!'),
        
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Password does not match !')
                .required('You must fill in this section!')
        }),
        onSubmit: (values) => {
            console.log(values);
            
        }
        
    })
    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={formik.handleSubmit}>
                <label >Username: </label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    name='name'
                    type="text"
                /> <br />

                {formik.errors.name && formik.touched.name && (
                    <p>{formik.errors.name}</p>
                )}
                <label >Email</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name='email'
                    type="text"
                /><br />
                {formik.errors.email && formik.touched.email && (
                    <p>{formik.errors.email}</p>
                )}
                <label >Password</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name='password'
                    type="text"
                /><br />
                {formik.errors.password && formik.touched.password && (
                    <p>{formik.errors.password}</p>
                )}
                <label >Confirm Password</label>
                <input
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    name='confirmPassword'
                    type="text"
                /><br />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <p>{formik.errors.confirmPassword}</p>
                )}
                <input type="submit" value='Submit Form'/>
            </form>
        </div>
    )
}

export default App
