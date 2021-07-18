import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "./Countries.css";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
const apiKey = `${process.env.REACT_APP_API_KEY}`
const headers = {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
};

function Countries() {
    const [countryData, setCountryData] = useState (null);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    // const sortedCountryData = countryData.sort(a,b);
    // console.log(sortedCountryData);
    const history = useHistory();

useEffect(() => {
    async function fetchCountryData() {
        toggleLoading(true);
        setError(false);

        try {
            const response = await axios.get('https://unogsng.p.rapidapi.com/countries'
                , {
                    headers: headers
            });
                setCountryData(response.data.results);
        } catch(e) {
          console.Error(e);
          setError(`Something went wrong! (${e.message})`);
        }

        toggleLoading(false);
    }

        fetchCountryData();
    }, []);

    return (
    <main className={"countrylist"}>
        <h1 className={"title"}>COUNTRIES</h1>
        <h3 className={"description"}>select a country from which you want to see new and expiring netflix content</h3>
            {loading && <LoadingSpinner/>}
            {error && <h3 className="error-message">{error}</h3>}

        <section className={"countrylist-container"}>
            { countryData ? (
                countryData.map((countryData) => {
                    return (
                        <button
                            key={countryData.id}
                            className={"country-button"}
                            type={"button"}
                            onClick={() => {history.push(`/countries/${countryData.id}/${countryData.country}`)}}>
                            {countryData.country}
                        </button>
                            )
                })
            ) : (<h1>Loading...</h1>)
            }
        </section>
    </main>
    );
}

export default Countries