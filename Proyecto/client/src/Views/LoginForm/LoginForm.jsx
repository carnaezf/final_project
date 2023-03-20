import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { postCreateProduct } from '../../Redux/actions/formActions/actions';
// import style from './CreateProducts.module.css';


const LoginForm = () => {
    const dispatch = useDispatch();

    const [ formSubmitted, changeSubmittedForm ] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    mail: 0,

                }}
                validate={
                    (values) => {
                        let InputErrors = {};

                        if (!values.name) {
                            InputErrors.name = 'name is required';
                        }
                        if (!values.sellingPrice) {
                            InputErrors.sellingPrice = 'sellingPrice is required';
                        }

                    }
                }


                // onSubmit={async (values) => {
                //     alert(JSON.stringify(values, null, 2))
                //     await dispatch(postCreateProduct(values))
                // }}

                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    // dispatch(postCreateProduct(values))
                    console.log(values);
                    resetForm()
                    console.log('Form submitted');
                    changeSubmittedForm(true);
                    setTimeout( () => changeSubmittedForm(false), 2000 )
                    
                }}
            >
                {( { errors } ) => (
                    <Form>
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
                        <div>
                            <label
                                className="uppercase tracking-wide text-black text-xs font-bold mb-2" 
                                htmlFor="name">Product Name: 
                            </label>
                            <Field
                                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                type="text" 
                                name="name" 
                                id="name"  
                                placeholder='Enter product name' 
                            />
                            <ErrorMessage 
                            name="name"
                            // component={ () => ( <div className={style.inputError} >{errors.name}</div> ) }
                            />
                        </div>

                        <div>
                            <label
                                className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                htmlFor="mail">Selling Price: 
                            </label>
                            <Field
                                className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                type="number" 
                                name="mail" 
                                id="mail" 
                                placeholder='e-mail' 
                            />
                            <ErrorMessage 
                            name="mail"
                            // component={ () => ( <div className={style.inputError} >{errors.mail}</div> ) }
                            />

                        </div>

                    </div>
                    <button
                        className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
                        type='submit'>
                            Login
                    </button>
                    {/* { formSubmitted && <p className={style.exito}>Form successfully submitted!</p>  } */}
                </Form>
                )}
            </Formik>
            
        </>
    );
}

export default LoginForm;

