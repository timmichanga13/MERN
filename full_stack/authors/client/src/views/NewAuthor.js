// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useParams, Link, useHistory } from "react-router-dom";
// import CancelButton from '../components/CancelButton';

// import AuthorForm from '../components/AuthorForm';

// const NewAuthor = (props) => {

//     const history = useHistory();
//     const { id } = props;
//     const [authors, setAuthors] = useState();
//     const [loaded, setLoaded] = useState(false);

//     const createAuthor = author => {
//         axios.post('http://localhost:8000/api/authors', author)
//             .then(res => {
//                 // setAuthors([...authors, res.data]);
//                 history.push('/');
//             })
//     }

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/authors/' + id)
//             .then(res => {
//                 setAuthors(res.data);
//                 setLoaded(true);
//             })
//     }, [])

//     return (
//         <div>
//             <h1>Create an Author</h1>
//             {loaded && (
//                 <AuthorForm
//                     onSubmitProp={createAuthor}
//                     initialAuthor=""
//                 />
//             )}
//             <CancelButton />
//             <Link to="/">Home</Link>
//         </div>
//     )
// }

// export default NewAuthor;






import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

import { Link, useHistory } from "react-router-dom";
import CancelButton from '../components/CancelButton';

export default () => {

    const history = useHistory();

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <AuthorForm onSubmitProp={createAuthor} initialAuthor="" />
            <CancelButton /><Link to="/">Home</Link>
        </div>
    )
}