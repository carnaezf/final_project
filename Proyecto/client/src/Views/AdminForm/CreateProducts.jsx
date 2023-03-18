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
                onSubmit={() => {
                    console.log('Form submitted');
                }}
            >
                {( { handleChange, values, handleSubmit } ) => (
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