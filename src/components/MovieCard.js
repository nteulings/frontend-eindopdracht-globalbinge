import React, {useEffect, useState} from 'react';
import axios from "axios";
import imageNotAvailable from "../assets/Image-Not-Available.png";

const apiKey = `${process.env.REACT_APP_API_KEY}`

// - [x] seperate request for fetching title details with NetflixID
// - [x] show results

function MovieCard(props) {
    const [expResult, setExpResult] = useState()
    console.log(props.netflixId);
    useEffect(() => {
        async function fetchMovieCard() {
            const response = await axios.get('https://unogsng.p.rapidapi.com/title', {
                params: {
                    netflixid: props.netflixId,
                },
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            console.log('FILM', response.data.results[0]);
            setExpResult(response.data.results[0])
            console.log("What is expResult?", expResult)
        }

        fetchMovieCard();
        // eslint-disable-next-line
    }, []);


    return (
        <div>
            { expResult && (
            <li className={"postercard"}>
                <img className={"poster-image"}

                src={(!expResult.img || expResult.img === "N/A") ? imageNotAvailable : expResult.img} alt={expResult.title}
                />
                <h3 className={"poster-title"}>{expResult.title}</h3>
            </li>
                )}
            <p>Filmdata!!</p>
        </div>
    )
}

export default MovieCard;