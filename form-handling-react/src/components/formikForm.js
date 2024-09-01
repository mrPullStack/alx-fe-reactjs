import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  // Define validation schema with Yup
    const validationSchema = Yup.object().shape({
        username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    });

    return (
        <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            console.log('Form data', values);
            setSubmitting(false); // To stop the loading indicator
        }}
        >
        {({ isSubmitting }) => (
            <Form>
            <div>
                <label htmlFor="username">Username:</label>
                <Field type="text" id="username" name="username" />
                <ErrorMessage name="username" component="p" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="p" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="p" />
            </div>
            <button type="submit" disabled={isSubmitting}>
                Register
            </button>
            </Form>
        )}
        </Formik>
    );
};

export default RegistrationForm;
