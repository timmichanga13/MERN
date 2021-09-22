import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
            <br/>
            <DeleteButton productId={product._id}/>
            <br/>
            <Link to="/products">Home</Link>
        </div>
    )
}
    
export default Detail;

