import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
import ProductForm from '../components/ProductForm';

const Update = (props) => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const updateProduct = product => {
        //make a put request to update a product
        axios.put(`http://localhost:8000/api/products/${id}`, product)
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
            <h1>Update a Product</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded && (
                <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
                />)}
            <Link to="/products">Home</Link>
        </div>
    )
}

export default Update;

