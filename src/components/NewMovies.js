import React, {useState, useEffect} from 'react';
import axios from "axios";
// import SearchBar from "./SearchBar";
import imageNotAvailable from "../assets/Image-Not-Available.png";
// import {countryDataContext} from "../Pages/Countries";
const apiKey = `${process.env.REACT_APP_API_KEY}`


function NewMovies() {
    const [newMoviesData, setNewMoviesData] = useState ([]);
    console.log("newMoviesData?", newMoviesData);
    // const [newTitlesIds, setNewTitlesIds] = useState({})

    useEffect(() => {
        async function fetchNewMovies() {
            console.log("on mount");
            // console.log("what is newMoviesData", newMoviesData);
            const response = await axios.get('https://unogsng.p.rapidapi.com/search'
                , {
                    params: {
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
            // console.log("what is response.datar.results new movies", response.data.results);

        }
        fetchNewMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h2>New Netflix content in //name</h2>
            {newMoviesData ?
                <h3>Globalbinge found {newMoviesData.length} title(s)</h3>
                :
                <h3>No results found</h3>}
            <section className={"poster-container"}>
                {newMoviesData ? (
                    newMoviesData.map((newMoviesData) => {
                        return (
                            <ul className={"poster-images"}
                                key ={newMoviesData.nfid}>
                                <li className={"postercard"}>
                                    <img className={"poster-image"}
                                         src={(!newMoviesData.poster || newMoviesData.poster === "N/A") ? imageNotAvailable : newMoviesData.poster}
                                         alt={newMoviesData.title}
                                         // onClick={() => {history.push(`/search/${queryResults.nfid}/${queryResults.clist}`)}}
                                    />
                                    <h3 className={"poster-title"}>{newMoviesData.title}</h3>
                                </li>
                            </ul>
                        );
                    })
                ) : (
                    <h1>Results show up here</h1>
                )}
            </section>
        </div>
    )
    }



export default NewMovies;