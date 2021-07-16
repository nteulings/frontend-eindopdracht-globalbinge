import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
// import {countryDataContext} from "../Pages/Countries";
const apiKey = `${process.env.REACT_APP_API_KEY}`

// The function ExpMovies fetches a list of expiring movies per country.
// The result doesn't contain any detailinfo (poster image, title

function ExpMovies() {
    const { id, name } = useParams()
    // const countryID = useContext(countryDataContext);
    // console.log("whats countryID", countryID);
    const [expMoviesData, setExpMoviesData] = useState(null);
    console.log("expMoviesData", expMoviesData, id, name)
    // const expTitleIds = expMoviesData.map((id) => {return id.netflixid});
    // console.log("what is expTitleIds", expTitleIds)
    // const today = new Date();
    // console.log("what is today", today)

    useEffect(() => {
        async function fetchExpMovies() {
            console.log("id", id);
            console.log("name", name)
            // console.log("what is expmoviesdata", expMoviesData)
            const response = await axios.get('https://unogsng.p.rapidapi.com/expiring', {
                    params: {
                        countrylist: id,
                        limit: 5,
                    },
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            setExpMoviesData(response.data.results);
            console.log(response.data.results);
            // console.log("expMoviesData", expMoviesData);
            // gives an object with array of results {netflixid:}
            // gives an object with array of results {nfid:}
            // set as prop in async function "title details"
            // movieposterslider on click detailinfo
        }

        fetchExpMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h2>Expiring Netflix content in {name}</h2>
                <ul className={"poster-images" }>

            {/*2. Voor iedere film, geef een movie-component weer. Dit component krijgt de properties netflixId mee*/}

                    {expMoviesData && expMoviesData.map((expMoviesData) => {
                        return (
                            <MovieCard netflixId={expMoviesData.netflixid} />
                )})
            }
            </ul>
        </>
    )
};

export default ExpMovies;