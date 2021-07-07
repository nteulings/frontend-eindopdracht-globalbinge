import React, {useState, useEffect} from 'react';
import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_KEY}`

// present data
// - [x] conditional if no data
// - [x] map countryData

// trigger rerender
// - [x] import useState & make state
// - [x] set state

// fetch country data
// - [x] set api key in .env and make variable
// - [x] import useeffect
// - [x] set a useeffect to trigger onMount
// - [x] write a asynch function
// - [x] call it in useeffect
// - [x] check data



function Countries() {
    const [countryData, setCountryData] = useState (null);
    console.log('what is the state', countryData)


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
    <div>
    <h1>Countries</h1>
        <div>
            { countryData ? (
                countryData.map((countryData) => {
                    return <h3 key={countryData.id}>
                        {countryData.country}</h3>
                })
            ) : (<h1>Loading...</h1>
            )}
        </div>
    </div>
    );
        }
export default Countries