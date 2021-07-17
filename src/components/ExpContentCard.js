import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import imageNotAvailable from "../assets/Image-Not-Available.png";
const apiKey = `${process.env.REACT_APP_API_KEY}`

function ExpContentCard( {netflixId} ) {
    const [expResult, setExpResult] = useState()
    const history = useHistory();
    console.log(netflixId);
    useEffect(() => {
        async function fetchExpContentCard() {
            const response = await axios.get('https://unogsng.p.rapidapi.com/title', {
                params: {
                    netflixid: netflixId,
                },
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            console.log('FILM', response.data.results[0]);
            setExpResult(response.data.results[0])
        }

        fetchExpContentCard();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            { expResult && (
            <li className={"postercard"}>
                <img className={"poster-image"}
                src={(!expResult.img || expResult.img === "N/A") ? imageNotAvailable : expResult.img} alt={expResult.title}
                     onClick={() => {history.push(`/search/${expResult.netflixid}/${undefined}`)}}
                />
                <h3 className={"poster-title"}>{expResult.title}</h3>
            </li>
                )}
        </>
    )
}

export default ExpContentCard;