import axios from 'axios';
import { POST_CREATE_PRODUCT } from '../actions_type'

export const postCreateProduct = (product) => async (dispatch) => {
    console.log(product);
    try {
        const { data } = await axios.post('/products', product);
        dispatch({ type: 'POST_CREATE_PRODUCT', payload: data });
    } catch (error) {
        console.log(error);
    }
}