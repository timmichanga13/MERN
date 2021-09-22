import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

import { useHistory } from "react-router-dom";

const NewProduct = (props) => {

    const [errors, setErrors] = useState([]);

    const history = useHistory();

    const createProduct = product => {
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                history.push("/products");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            })
    }


    return (
        <div>
            <h1>Add A Product</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
        </div>
    )
}

export default NewProduct;