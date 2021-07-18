import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import "./Search.css"
import SearchBar from '../../components/searchBar/SearchBar';
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import imageNotAvailable from '../../assets/ImageNotAvailable.png'
import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_KEY}`
const headers = {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
};

function SearchMovies() {
    const history = useHistory();
    const [query, setQuery] = useState(null);
    const [queryResults, setQueryResults] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchSearchMovies() {
            toggleLoading(true);
            setError(false);

        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/search',
                {
                    params: {
                    orderby: 'rating',
                    limit: '20',
                    query: `${query}`,
                    offset: '0'
                },
                headers: headers
            });
                setQueryResults(response.data.results);
        } catch(e) {
          console.Error(e);
          setError(`Something went wrong! (${e.message})`);
        }

            toggleLoading(false);
        }

        fetchSearchMovies();
    // eslint-disable-next-line
}, [query]);

    return (

        <main>
            <h1 className={"title"}>SEARCH</h1>
                <h3>Search for Netflix titles around the world</h3>
                    <SearchBar setQueryHandler={setQuery}/>
                        {query && queryResults ?
                    <h3>Globalbinge found {queryResults.length} title(s) for your search text: <strong>{query}</strong></h3>
                    :
                    <h3>No results found</h3>}
                    {loading && <LoadingSpinner/>}
                    {error && <h3 className="error-message">{error}</h3>}

            <section className={"poster-container"}>
                {queryResults ? (
                    queryResults.map((queryResults) => {
                        return (
                            <ul className={"poster-images"}
                                key ={queryResults.nfid}>

                                    de<li className={"postercard"}>
                                        <img className={"poster-image"}
                                             src={(!queryResults.poster || queryResults.poster === "N/A") ? imageNotAvailable : queryResults.poster}
                                             alt={queryResults.title}
                                             onClick={() => {history.push(`/detailinfo/${queryResults.nfid}/${queryResults.clist}`)}}/>
                                        <h3 className={"poster-title"}>{queryResults.title}</h3>
                                    </li>
                            </ul>
                        );
                    })
                    ) : (
                    <h1>Results show up here</h1>
                    )}
            </section>
        </main>
    )}

export default SearchMovies;