import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";

import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import CancelButton from '../components/CancelButton';

const Update = (props) => {

    const history = useHistory();
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update an Author</h1>
            {loaded && (
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialAuthor={author.author}
                />
            )}
            <CancelButton />
            <DeleteButton authorId={author._id} successCallback={() => history.push("/")} />
            <Link to="/">Home</Link>
        </div>
    )
}

export default Update;

