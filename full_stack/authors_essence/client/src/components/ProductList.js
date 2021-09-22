import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import DeleteButton from './DeleteButton';

const ProductList = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const { removeFromDom } = props;



    return (
        <div>
            <h1>These are the current products:</h1>
            {props.products.map((product, i) =>
                <p key={i}>
                    {product.title}
                    |
                    <Link to={"/products/" + product._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </p>
            )}
        </div>
    )
}

export default ProductList;

