import React, {useState, useEffect, createContext} from 'react';
import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_KEY}`

// - [x] added variable for countryName

// create contextProvider for countryID and data
// - [x] import createcontext
// - [x] make context
// - [x] set contextProvider
// - [x] values
// - [x] export context

export const countryDataContext = createContext({});

function Countries() {
    const [countryData, setCountryData] = useState (null);
    const [countryID, setCountryId] = useState('67')
    const [countryName, setCountryName] = useState("The Netherlands")
    console.log('what is countryData', countryData);
    console.log('countryId?', countryID);
    console.log('countryName?', countryName);

useEffect(() => {
    async function fetchCountryData() {
    console.log("on mount");
            const response = await axios.get('https://unogsng.p.rapidapi.com/countries'
                , {
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            console.log('what is response', response.data.results);
            setCountryData(response.data.results);
        }
        fetchCountryData();
    }, [ ]);


    return (
    <countryDataContext.Provider
        value={{countryData, setCountryData, countryName, setCountryName, countryID, setCountryId}}
        >
        <div>
    <h1>Countries</h1>
        <h3>select a country from which you want to see new and expiring netflix content</h3>
        <div>
            { countryData ? (
                countryData.map((countryData) => {
                    return (
                    <ul key={countryData.id}>
                    <li>
                        <button className={"countryList"} type={"button"} onClick={() => {setCountryId(countryData.id); setCountryName(countryData.country)}}>
                        {countryData.country}
                        </button>
                    </li>
                    </ul>
                    )
                })
            ) : (<h1>Loading...</h1>
            )}
        </div>
    </div>
    </countryDataContext.Provider>
    );
        }
export default Countries