import React, {useEffect, useState} from "react";
import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_KEY}`

// userstory: user can search for Netflix titles by keyword.
// # search fetching
// [x] install axios
// [x] import useEffect
// [x] set a useEffect
// [x] write an asynch function to fetch data
// [x] call it in the useEffect
// [x] check data

// [x] make a state
// [x] set state

function SearchMovies() {
    const [queryResults, setQueryResults] = useState(null);
    console.log('what is the state',queryResults);
    useEffect(() => {
    async function fetchSearchMovies() {
        console.log("on mount");
        const response = await axios.get('https://unogsng.p.rapidapi.com/search'
            , {
                params: {
                    start_year: '1972',
                    orderby: 'dateDesc',
                    limit: '20',
                    query: 'hello',
                    offset: '0'
                },
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
        // console.log("response SearchMovies",response);
        console.log('what is response.data.results', response.data.results);
        setQueryResults(response.data.results)
    }
    fetchSearchMovies();
    // eslint-disable-next-line
}, []);

    return (
    <div>
    <h1>Search</h1>
        <h3>Search for Netflix titles around the world</h3>

    </div>
)}

export default SearchMovies;