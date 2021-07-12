import React, {useState, useEffect} from 'react';
import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_KEY}`

// - [x] fetch expiring content per country



function ExpMovies() {
    const [expMoviesData, setExpMoviesData] = useState(null);
    // const expTitleIds = expMoviesData.map((id) => {return id.netflixid});
    // console.log("what is expTitleIds", expTitleIds)
    // const today = new Date();
    // console.log("what is today", today)

    useEffect(() => {
        async function fetchExpMovies() {
            console.log("on mount");
            console.log("what is expmoviesdata", expMoviesData)
            const response = await axios.get('https://unogsng.p.rapidapi.com/expiring'
                , {
                    params: {countrylist: '67'},
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            setExpMoviesData(response.data.results);
            console.log("", response)
            // gives an object with array of results
        }

        fetchExpMovies();
        // eslint-disable-next-line
    }, []);


    return (
        <h1>expiring movies</h1>
    )
}

export default ExpMovies;