import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "./Countries.css";

const apiKey = `${process.env.REACT_APP_API_KEY}`

// -[ ] order results alphabetically?

function Countries() {
    const [countryData, setCountryData] = useState (null);
    const history = useHistory();
    // const [countryID, setCountryId] = useState('67')
    // const [countryName, setCountryName] = useState("Netherlands")
    // console.log('what is countryData', countryData);
    // console.log('countryId?', countryID);
    // console.log('countryName?', countryName);

useEffect(() => {
    async function fetchCountryData() {
    // console.log("on mount");
            const response = await axios.get('https://unogsng.p.rapidapi.com/countries'
                , {
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            setCountryData(response.data.results);
            console.log("what is setCountry.data", response.data.results)
    }
        fetchCountryData();
    }, []);


// const getCountryIDName = () => {
//     setCountryId(countryData.id);
//     setCountryName(countryData.country)}

    return (
        // <countryDataContext.Provider value={countryID}>
    <main className={"countrylist"}>
        <h1 className={"title"}>Countries</h1>
        <h3 className={"description"}>select a country from which you want to see new and expiring netflix content</h3>
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
            ) : (<h1>Loading...</h1>
            )}
        </section>
    </main>
        // </countryDataContext.Provider>
    );
        }
export default Countries