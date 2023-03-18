import React, { useState } from 'react';
import { Formik } from 'formik';
import style from './CreateProducts.module.css';


const CreateProduct = () => {
    const [ formSubmitted, changeSubmittedForm ] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    sellingPrice: '',
                    description: '',
                    category: '',
                    images: ''
                }}
                validate={
                    (values) => {
                        let InputErrors = {};

                        if (!values.id) {
                            InputErrors.id = 'id is required';
                        }
                        if (!values.name) {
                            InputErrors.name = 'name is required';
                        }
                        if (!values.sellingPrice) {
                            InputErrors.sellingPrice = 'sellingPrice is required';
                        }
                        if (!values.description) {
                            InputErrors.description = 'description is required';
                        }
                        if (!values.category) {
                            InputErrors.category = 'category is required';
                        }
                        if (!values.images) {
                            InputErrors.images = 'images is required';
                        }
                        return InputErrors;
                    }
                }
                onSubmit={(values, { resetForm }) => {
                    resetForm()
                    console.log('Form submitted');
                    changeSubmittedForm(true);
                    setTimeout( () => changeSubmittedForm(false), 2000 )
                }}
            >
                {( { values, errors, touched, handleSubmit, handleChange, handleBlur } ) => (
                    <form className='ceateProductName' onSubmit={ handleSubmit }> 
                    { console.log(errors) }
                    { console.log(touched) }
                    <div>
                        <label 
                            htmlFor="id">Product id: 
                        </label>
                        <input 
                            type="text" 
                            name="id" id="id" 
                            placeholder='Enter id product' 
                            value={ values.id }
                            onChange={handleChange}
                            onBlur={ handleBlur }
                        />
                        { console.log(touched) }
                        { touched.id && errors.id && <div className={style.inputError} >{errors.id}</div> }
                    </div>

                    <div>
                        <label 
                            htmlFor="name">Product Name: 
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"  
                            placeholder='Enter product name' 
                            value={ values.name }
                            onChange={handleChange}
                            onBlur={ handleBlur }
                        />
                        { touched.name && errors.name && <div className={style.inputError} >{errors.name}</div> }
                    </div>

                    <div>
                        <label 
                            htmlFor="sellingPrice">Selling Price: 
                        </label>
                        <input 
                            type="number" 
                            name="sellingPrice" 
                            id="sellingPrice" 
                            placeholder='Enter selling price' 
                            value={ values.sellingPrice }
                            onChange={handleChange}
                            onBlur={ handleBlur }
                        />
                        {  touched.sellingPrice && errors.sellingPrice && <div className={style.inputError} >{errors.sellingPrice}</div> }
                    </div>

                    <div>
                        <label 
                            htmlFor="description">Product Description: 
                        </label>
                        <input 
                            type="text" 
                            name="description" 
                            id="description"  
                            placeholder='Enter product description' 
                            value={ values.description }
                            onChange={handleChange}
                            onBlur={ handleBlur }
                        />
                        { touched.description && errors.description && <div className={style.inputError} >{errors.description}</div> }
                    </div>

                    <div>
                        <label 
                            htmlFor="category">Product Category: 
                        </label>
                        <input 
                            type="text" 
                            name="category" 
                            id="category" 
                            placeholder='Enter product category' 
                            value={ values.category }
                            onChange={handleChange}
                            onBlur={ handleBlur }
                        />
                        { touched.category && errors.category && <div className={style.inputError} >{errors.category}</div> }
                    </div>

                    <div>
                        <label 
                            htmlFor="images">Images: 
                            </label>
                        <input 
                            type="file" 
                            name="images" 
                            id="images" 
                            value={ values.images }
                            onChange={handleChange}
                            onBlur={ handleBlur }
                        />
                        { touched.images && errors.images && <div className={style.inputError} >{errors.images}</div> }
                    </div>
                    <button type='submit'>Send</button>
                    { formSubmitted && <p className={style.exito}>Form successfully submitted!</p>  }
                </form>
                )}
            </Formik>
        </>
    );
}

export default CreateProduct;