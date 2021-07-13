import React, {useEffect, useState} from "react";
import "./Search.css"
import SearchBar from '../components/SearchBar';
import imageNotAvailable from '../assets/Image-Not-Available.png'
import axios from "axios";

const apiKey = `${process.env.REACT_APP_API_KEY}`

function SearchMovies() {
    const [query, setQuery] = useState(null);
    const [queryResults, setQueryResults] = useState([]);
    console.log('whats query', query);

    console.log('what is the state',queryResults);
    useEffect(() => {
    async function fetchSearchMovies() {
        console.log("on mount");
        const response = await axios.get('https://unogsng.p.rapidapi.com/search'
            , {
                params: {
                    orderby: 'rating',
                    limit: '20',
                    query: `${query}`,
                    offset: '0'
                },
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
        // console.log("response SearchMovies",response);
        console.log('what is response.data.results', response.data.results);
        setQueryResults(response.data.results) //rerender
    }
    fetchSearchMovies();
    // eslint-disable-next-line
}, [query]);

    return (
    <div>
    <h1>Search</h1>
        <h3>Search for Netflix titles around the world</h3>
        <SearchBar setQueryHandler={setQuery}/>
        {queryResults ? <h3>Globalbinge found {queryResults.length} title(s) for your search text: <strong>{query}</strong></h3> : <h3>No results found</h3>}
        <section className={"poster-container"}>
            {queryResults ? (
            queryResults.map((queryResults) => {
                // <img src={record.picture} onError={(e)=>{e.target.onerror = null; e.target.src="image_path_here"}}/>
                return (
            <ul className={"poster-images"}
                key ={queryResults.nfid}>
                <li className={"postercard"}><img className={"poster-image"}
                         src={(!queryResults.poster || queryResults.poster === "N/A") ? imageNotAvailable : queryResults.poster}
                         alt={queryResults.title}
                    />
                    <h3 className={"poster-title"}>{queryResults.title}</h3>
                </li>
            </ul>
                );
                    })
                ) : (
                    <h1></h1>
            )}
        </section>
    </div>
)}

export default SearchMovies;