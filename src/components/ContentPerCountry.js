import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useParams } from "react-router-dom";
import imageNotAvailable from "../assets/Image-Not-Available.png";
import ExpContentCard from "./ExpContentCard";
const apiKey = `${process.env.REACT_APP_API_KEY}`
const headers = {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
};

function ContentPerCountry() {
    const { id, name } = useParams();
    const [newMoviesData, setNewMoviesData] = useState ([]);
    const [expMoviesData, setExpMoviesData] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();

    // Fetches expiring Netflix content per country
    // passing id & name for fetching content info to ExpContentCard

    useEffect(() => {
        async function fetchExpMovies() {
            toggleLoading(true);
            setError(false);

            try {
                const response = await axios.get('https://unogsng.p.rapidapi.com/expiring',
                    {
                        params: {
                        countrylist: id,
                        limit: 20,
                    },
                    headers: headers
                });
                    setExpMoviesData(response.data.results);
                    console.log(response.data.results);
            } catch(e) {
              console.Error(e);
              setError(`Something went wrong! (${e.message})`);
            }

            toggleLoading(false);
        }

        fetchExpMovies();
    }, [id, name]);

    // Fetches new Netflix content per country
    // passing id & name for detailinfo per title

    useEffect(() => {
        async function fetchNewMovies() {
            toggleLoading(true);
            setError(false);

            try {
                const response = await axios.get('https://unogsng.p.rapidapi.com/search',
                    {
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
            } catch(e) {
              console.Error(e);
              setError(true);
            }

            toggleLoading(false);
        }
        fetchNewMovies();
        // eslint-disable-next-line
    }, []);

    return (

        <main>
            <h2>Expiring Netflix content in {name}</h2>

                {expMoviesData ?
                <h3>Globalbinge found {expMoviesData.length} title(s)</h3> :
                <h3>No results found</h3>}
                {loading && <LoadingSpinner/>}
                {error && <h3 className="error-message">{error}</h3>}

            <section className={"poster-container"}>

                    {/*NetflixIds from results passed with params to expMoviesData*/}
                    {/*results from expMoviesData with info show up here*/}

                    {expMoviesData && expMoviesData.map((expMoviesData) => {
                        return (
                            <ul className={"poster-images"}>
                                <ExpContentCard netflixId={expMoviesData.netflixid} />
                            </ul>
                        )})
                    }
                </section>

            <h2>New Netflix content in {name}</h2>
                {newMoviesData ?
                    <h3>Globalbinge found {newMoviesData.length} title(s)</h3> :
                    <h3>No results found</h3>}
                    {loading && <LoadingSpinner/>}
                    {error && <h3 className="error-message">{error}</h3>}


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
        </main>

        )
    };

export default ContentPerCountry;