import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutForm = () => {
return (
    <div>
        <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
            email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
        })}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
        }}
        >
        {({ isSubmitting }) => (
            <Form>
            <div className="mb-4">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" className="border rounded-md p-2 w-full" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                disabled={isSubmitting}
            >
                Submit
            </button>
            </Form>
        )}
        </Formik>
    </div>
    );
};

export default CheckoutForm;
