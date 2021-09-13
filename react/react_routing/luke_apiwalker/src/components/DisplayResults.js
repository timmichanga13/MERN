import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const DisplayResults = () => {

    const { category, id } = useParams();

    const [result, setResult] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res => {
                setResult(res.data)
            })
            .catch(err => console.log(err))
    }, [category, id])


    return (
        <div>
            <h2>These are the results you are looking for:</h2>
            <div>
                <h3>{result.name}</h3>
                {category === "people" ? (<p><b>Height:</b> {result.height}</p>) : (<p><b>Climate:</b> {result.climate}</p>)}
                {category === "people" ? (<p><b>Mass:</b> {result.mass}</p>) : (<p><b>Terrain:</b> {result.terrain}</p>)}
                {category === "people" ? (<p><b>Hair Color:</b> {result.hair_color}</p>) : (<p><b>Surface Water:</b> {result.surface_water}</p>)}
                {category === "people" ? (<p><b>Skin Color:</b> {result.skin_color}</p>) : (<p><b>Population:</b> {result.population}</p>)}
            </div>
        </div>
    )
}

export default DisplayResults;