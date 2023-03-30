import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const CheckoutForm = () => {
    return(
        <div>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={ Yup.object({
                    email: Yup.string()
                    .email('invalid email address')
                    .required('Email is required')
                })}

                // onSubmit = { (values, { setSubmitting })}

                >
                {/* Estados */}
                <Form>
                    <div>
                        <label htmlFor="mail">mail:</label>
                        <Field type="text" name="mail" id="mail" />
                        <ErrorMessage name="mail" />
                    </div>
                    <button
                        type='submit'
                        className="temp"
                        disabled=''
                        >
                        
                    </button>
                </Form>
                
            </Formik>
        </div>
    )
    
}


export default CheckoutForm;