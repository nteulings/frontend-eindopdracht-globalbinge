import React, {useState, useEffect, createContext} from 'react';
import axios from "axios";
import "./Countries.css"

const apiKey = `${process.env.REACT_APP_API_KEY}`

// - [x] added variable for countryName

// create contextProvider for countryID and data
// - [x] import createcontext
// - [x] make context
// - [x] set contextProvider
// - [x] values
// - [x] export context

export const countryDataContext = createContext({});
// console.log("whatiscountrydatacontext", countryDataContext);

function Countries() {
    const [countryData, setCountryData] = useState (null);
    const [countryID, setCountryId] = useState('67')
    const [countryName, setCountryName] = useState("Netherlands")
    // console.log('what is countryData', countryData);
    console.log('countryId?', countryID);
    console.log('countryName?', countryName);

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


    return (
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
                            onClick={() => {setCountryId(countryData.id); setCountryName(countryData.country)}}>
                            {countryData.country}

                        </button>
                    )
                })
            ) : (<h1>Loading...</h1>
            )}
        </section>
    </main>
    );
        }
export default Countries