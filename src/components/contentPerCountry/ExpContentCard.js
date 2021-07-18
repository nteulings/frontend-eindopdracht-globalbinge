import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import imageNotAvailable from "../../assets/ImageNotAvailable.png";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
const apiKey = `${process.env.REACT_APP_API_KEY}`
const headers = {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
};

function ExpContentCard( { netflixId } ) {
    const [expResult, setExpResult] = useState()
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();

    useEffect(() => {
        async function fetchExpContentCard() {
            toggleLoading(true);
            setError(false);

            try {
                const response = await axios.get('https://unogsng.p.rapidapi.com/title',
                    {
                        params: {
                        netflixid: netflixId,
                },
                headers: headers
            });
                setExpResult(response.data.results[0])
            } catch(e) {
                console.Error(e);
                    setError(`Something went wrong! (${e.message})`);
            }

            toggleLoading(false);
        }
        fetchExpContentCard();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {loading && <LoadingSpinner/>}
            {error && <h3 className="error-message">{error}</h3>}
            {expResult && (
            <li className={"postercard"}>
                <img className={"poster-image"}
                src={(!expResult.img || expResult.img === "N/A") ? imageNotAvailable : expResult.img} alt={expResult.title}
                     onClick={() => {history.push(`/detailinfo/${expResult.netflixid}/${undefined}`)}}
                />
                <h3 className={"poster-title"}>{expResult.title}</h3>
            </li>
            )}
        </>
    )
}

export default ExpContentCard;