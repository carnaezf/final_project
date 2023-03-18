import React from 'react';
import { Formik } from 'formik';

const CreateProduct = () => {
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
                        if (!values.id) {
                            console.log('id is required');
                        }
                        if (!values.name) {
                            console.log('name is required');
                        }
                        if (!values.sellingPrice) {
                            console.log('sellingPrice is required');
                        }
                        if (!values.description) {
                            console.log('description is required');
                        }
                        if (!values.category) {
                            console.log('category is required');
                        }
                        if (!values.images) {
                            console.log('images is required');
                        }
                    }
                }
                onSubmit={(values) => {
                    console.log(values);
                    console.log('Form submitted');
                }}
            >
                {( { values, handleSubmit, handleChange, handleBlur } ) => (
                    <form 
                        className='ceateProductName' 
                        onSubmit={ handleSubmit }
                    > 
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
                    </div>
                    <button type='submit'>Send</button>
                </form>
                )}
            </Formik>
        </>
    );
}

export default CreateProduct;