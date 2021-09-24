import React from 'react';
import {useFormik} from 'formik';

type FormikValuesType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const LoginForm = () => {
    const formik = useFormik({
        validate: (values: FormikValuesType) => {
            const errors: FormikValuesType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required!';
            } else if (values.password.length < 8) {
                errors.password = 'Must be more than 7 characters'
            }

            return errors;
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },

        onSubmit: values => {
        }
    })

    return (
        <form action="submit" onSubmit={formik.handleSubmit}>
            <div>
                <input type='text' placeholder={'Email'} {...formik.getFieldProps('email')}/>
                {formik.touched.email &&
                formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
            </div>
            <div>
                <input type='password' placeholder={'Password'}{...formik.getFieldProps('password')}/>
                {formik.touched.password &&
                formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
            </div>
            <div>
                <input type='checkbox'  {...formik.getFieldProps('rememberMe')}/>
                <span>Remember Me</span>
            </div>
            <button type='submit' >Log In</button>
        </form>
    )
}

export default LoginForm;
