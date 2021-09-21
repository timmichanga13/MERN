import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const ProductList = (props) => {
    return (
        <div>
            <h1>These are the current products:</h1>
            {props.products.map( (product, i) =>
                <p key={i}><Link to={`/products/${product._id}`}>{product.title}</Link></p>
            )}
        </div>
    )
}
    
export default ProductList;

