import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    return (
        <div>
            {authors.map((author, idx) => {
                return (
                    <p key={idx}>
                        
                            {author.author}
                        
                        |
                        <Link to={"/edit/" + author._id}>
                            Edit
                        </Link>
                        |
                        <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                    </p>
                )
            })}
        </div>
    );
}

export default AuthorList;

