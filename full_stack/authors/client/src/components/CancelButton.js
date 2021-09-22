import React from 'react'
import axios from 'axios';

import { useParams, Link, useHistory } from "react-router-dom";

    
export default props => {
    
    
    const history = useHistory();
    
    const cancelCreation = e => {
        history.push('/');
    }
    
    return (
        <button onClick={cancelCreation}>
            Cancel
        </button>
    )
}

