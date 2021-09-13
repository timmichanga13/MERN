import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const DisplayResults = () => {

    const { category, id } = useParams();

    const [result, setResult] = useState({});
    const [err, setErr] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res => {
                console.log(res);
                setResult(res.data);
                setErr({})
            })
            .catch(err => {
                console.log(err);
                setErr(err)
            })
    }, [category, id])


    return (
        <div>
            {err.response? <div><h1>These are not the droids you're looking for...</h1><img src="https://i.kym-cdn.com/entries/icons/original/000/018/682/obi-wan.jpg" alt="Obi-Wan Kenobi being a Jedi master" /></div> :
                <div>
                    <h2>These are the results you are looking for:</h2>
                    <h3>{result.name}</h3>
                    {category === "people" ? (<p><b>Height:</b> {result.height}</p>)
                        : category === "planets" ? (<p><b>Climate:</b> {result.climate}</p>)
                            : null}
                    {category === "people" ? (<p><b>Mass:</b> {result.mass}</p>)
                        : category === "planets" ? (<p><b>Terrain:</b> {result.terrain}</p>)
                            : null}
                    {category === "people" ? (<p><b>Hair Color:</b> {result.hair_color}</p>)
                        : category === "planets" ? (<p><b>Surface Water:</b> {result.surface_water}</p>)
                            : null}
                    {category === "people" ? (<p><b>Skin Color:</b> {result.skin_color}</p>)
                        : category === "planets" ? (<p><b>Population:</b> {result.population}</p>)
                            : null}
                </div>
            }
        </div>
    )
}

export default DisplayResults;