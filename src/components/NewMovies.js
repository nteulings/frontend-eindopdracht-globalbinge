import React, {useState, useEffect} from 'react';
import axios from "axios";
// import {countryDataContext} from "../Pages/Countries";
const apiKey = `${process.env.REACT_APP_API_KEY}`


function NewMovies() {
    const [newMoviesData, setNewMoviesData] = useState (null);
    console.log("newMoviesData?", newMoviesData);
    // const [newTitlesIds, setNewTitlesIds] = useState({})

    useEffect(() => {
        async function fetchNewMovies() {
            console.log("on mount");
            // console.log("what is newMoviesData", newMoviesData);
            const response = await axios.get('https://unogsng.p.rapidapi.com/search'
                , {
                    params: {
                        start_year: '1972',
                        orderby: 'dateDesc',
                        limit: '20',
                        countrylist: '33',
                        country_andorunique: 'unique',
                        offset: '0'
                    },
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            setNewMoviesData(response.data.results);
            // gives an object with array of results {nfid:}
            // set as prop in async function "title details"
            // movieposterslider on click detailinfo

        }
        fetchNewMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <h1>expiring movies</h1>
    )

}
export default NewMovies;