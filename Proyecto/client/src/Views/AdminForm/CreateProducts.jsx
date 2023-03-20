import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { postCreateProduct } from '../../Redux/actions/formActions/actions';
import style from './CreateProducts.module.css';


const CreateProduct = () => {
    const dispatch = useDispatch();

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
                    average_rating: '',
                    reviews_count: '',
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
                        if (!values.average_rating) {
                            InputErrors.average_rating = 'average_rating is required';
                        }
                        if (!values.reviews_count) {
                            InputErrors.reviews_count = 'reviews_count is required';
                        }
                        if (!values.images) {
                            InputErrors.images = 'images is required';
                        }
                        return InputErrors;
                    }
                }
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    resetForm()
                    console.log('Form submitted');
                    changeSubmittedForm(true);
                    setTimeout( () => changeSubmittedForm(false), 2000 )
                }}
            >
                {( { errors } ) => (
                    <Form className={ style.createProductName }
                    // Implementar dispatch para que envíe un objeto producto en lugar 
                    // de un objeto Form.
                    > 
                    <div>
                        <label 
                            htmlFor="id">Product id: 
                        </label>
                        <Field 
                            type="text" 
                            name="id" 
                            id="id" 
                            placeholder='Enter id product' 
                        />
                        <ErrorMessage 
                        name="id"
                        component={ () => ( <div className={style.inputError} >{errors.id}</div> ) }
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="name">Product Name: 
                        </label>
                        <Field 
                            type="text" 
                            name="name" 
                            id="name"  
                            placeholder='Enter product name' 
                        />
                        <ErrorMessage 
                        name="name"
                        component={ () => ( <div className={style.inputError} >{errors.name}</div> ) }
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="sellingPrice">Selling Price: 
                        </label>
                        <Field 
                            type="number" 
                            name="sellingPrice" 
                            id="sellingPrice" 
                            placeholder='Enter selling price' 
                        />
                        <ErrorMessage 
                        name="sellingPrice"
                        component={ () => ( <div className={style.inputError} >{errors.sellingPrice}</div> ) }
                        />
                        
                    </div>

                    <div>
                        <label 
                            htmlFor="description">Product Description: 
                        </label>
                        <Field 
                            type="text" 
                            name="description" 
                            id="description"  
                            placeholder='Enter product description' 
                        />
                        <ErrorMessage 
                        name="description"
                        component={ () => ( <div className={style.inputError} >{errors.description}</div> ) }
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="category">Product Category: 
                        </label>
                        <Field name="category" as="select">
                            <option value="accessories">Accessories</option>
                            <option value="shoes">Shoes</option>
                            <option value="clothing">Clothing</option>
                        </Field>
                        <ErrorMessage 
                        name="category"
                        component={ () => ( <div className={style.inputError} >{errors.category}</div> ) }
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="average_rating">Product Average Rating: 
                        </label>
                        <Field 
                            type="number" 
                            name="average_rating" 
                            id="average_rating"  
                            placeholder='Enter product average_rating' 
                        />
                        <ErrorMessage 
                        name="average_rating"
                        component={ () => ( <div className={style.inputError} >{errors.average_rating}</div> ) }
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="reviews_count">Product Reviews Count : 
                        </label>
                        <Field 
                            type="number" 
                            name="reviews_count" 
                            id="reviews_count"  
                            placeholder='Enter product reviews_count' 
                        />
                        <ErrorMessage 
                        name="reviews_count"
                        component={ () => ( <div className={style.inputError} >{errors.reviews_count}</div> ) }
                        />
                    </div>

                    <div>
                        <label 
                            htmlFor="images">Images: 
                            </label>
                        <Field 
                            type="file" 
                            name="images" 
                            id="images" 
                        />
                        <ErrorMessage 
                        name="images"
                        component={ () => ( <div className={style.inputError} >{errors.images}</div> ) }
                        />
                    </div>
                    <button type='submit'>Send</button>
                    { formSubmitted && <p className={style.exito}>Form successfully submitted!</p>  }
                </Form>
                )}
            </Formik>
            
        </>
    );
}

export default CreateProduct;