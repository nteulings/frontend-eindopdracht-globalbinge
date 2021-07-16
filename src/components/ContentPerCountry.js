import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import imageNotAvailable from "../assets/Image-Not-Available.png";
const apiKey = `${process.env.REACT_APP_API_KEY}`
const headers = {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
};

function ContentPerCountry() {
    const [newMoviesData, setNewMoviesData] = useState ([]);
    const { id, name } = useParams();
    const [expMoviesData, setExpMoviesData] = useState(null);
    const history = useHistory();
    console.log("expMoviesData, id, name", expMoviesData, id, name)

    useEffect(() => {
        async function fetchExpMovies() {
            console.log("id", id);
            console.log("name", name)
            const response = await axios.get('https://unogsng.p.rapidapi.com/expiring', {
                    params: {
                        countrylist: id,
                        limit: 5,
                    },
                    headers: headers
                });
            setExpMoviesData(response.data.results);
            console.log(response.data.results);
        }

        fetchExpMovies();
    }, [id, name]);

    useEffect(() => {
        async function fetchNewMovies() {
            const response = await axios.get('https://unogsng.p.rapidapi.com/search'
                , {
                    params: {
                        orderby: 'dateDesc',
                        limit: '20',
                        countrylist: id,
                        country_andorunique: 'unique',
                        offset: '0'
                    },
                    headers: headers
                });
            setNewMoviesData(response.data.results);
            // console.log("what is response.datar.results new movies", response.data.results);

        }
        fetchNewMovies();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div>
            <h2>Expiring Netflix content in {name}</h2>
            {expMoviesData ? <h3>Globalbinge found {expMoviesData.length} title(s)</h3>
                : <h3>No results found</h3>}
            <section className={"poster-container"}>

            {/*2. Voor iedere film, geef een movie-component weer. Dit component krijgt de properties netflixId mee*/}

                    {expMoviesData && expMoviesData.map((expMoviesData) => {
                        return (
                            <ul className={"poster-images"}>

                            <MovieCard netflixId={expMoviesData.netflixid} />
                            </ul>
                )})
            }

            </section>
            </div>

            <div>
                <h2>New Netflix content in {name}</h2>
                {newMoviesData ? <h3>Globalbinge found {newMoviesData.length} title(s)</h3>
                    : <h3>No results found</h3>}
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
                                             onClick={() => {history.push(`/search/${newMoviesData.nfid}/${newMoviesData.clist}`)}}
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

        </>
    )
};

export default ContentPerCountry;