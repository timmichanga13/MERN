import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId);
                history.push("/products")
            })
            .catch(err => console.error(err));
            
    }
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <br/>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
            <br/>
            <Link to="/products">Home</Link>
        </div>
    )
}
    
export default Detail;

