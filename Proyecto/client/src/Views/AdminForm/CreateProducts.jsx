import React from 'react';
import { Formik } from 'formik';

const CreateProduct = () => {
    return (
        <>
            <Formik>
                {() => (
                    <form className='ceateProductName'>
                    <div>
                        <label htmlFor="id">Product id: </label>
                        <input type="text" name="id" id="id" placeholder='Enter id product'/>
                    </div>

                    <div>
                        <label htmlFor="name">Product Name: </label>
                        <input type="text" name="name" id="name"  placeholder='Enter product name'/>
                    </div>

                    <div>
                        <label htmlFor="sellingPrice">Selling Price: </label>
                        <input type="number" name="sellingPrice" id="sellingPrice" placeholder='Enter selling price'/>
                    </div>

                    <div>
                        <label htmlFor="description">Product Description: </label>
                        <input type="text" name="description" id="description"  placeholder='Enter product description'/>
                    </div>

                    <div>
                        <label htmlFor="category">Product Category: </label>
                        <input type="text" name="category" id="category" placeholder='Enter product category'/>
                    </div>

                    <div>
                        <label htmlFor="images">Images: </label>
                        <input type="file" name="images" id="images"/>
                    </div>
                    <button type='submit'>Send</button>
                </form>
                )}
            </Formik>
        </>
    );
}

export default CreateProduct;