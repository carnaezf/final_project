import react from 'react';

const CreateProduct = () => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor="id">Product id: </label>
                    <input type="text" name="id" id="id" />
                </div>

                <div>
                    <label htmlFor="name">Product Name: </label>
                    <input type="text" name="name" id="name" />
                </div>

                <div>
                    <label htmlFor="sellingPrice">Selling Price: </label>
                    <input type="number" name="sellingPrice" id="sellingPrice" />
                </div>

                <div>
                    <label htmlFor="description">Product Description: </label>
                    <input type="text" name="description" id="description" />
                </div>

                <div>
                    <label htmlFor="category">Product Category: </label>
                    <input type="text" name="category" id="category" />
                </div>

                <div>
                    <label htmlFor="images">Images: </label>
                    <input type="file" name="images" id="images" />
                </div>
            </form>
        </>
    );
}

export default CreateProduct;