import React, {useState, useEffect} from 'react';
import axios from "axios";
const apiKey = `${process.env.REACT_APP_API_KEY}`

// - [ ]

// const options = {
//     method: 'GET',
//     url: 'https://unogsng.p.rapidapi.com/search',
//     params: {
//         start_year: '1972',
//         orderby: 'rating',
//         audiosubtitle_andor: 'and',
//         limit: '100',
//         subtitle: 'english',
//         countrylist: '78,46',
//         audio: 'english',
//         country_andorunique: 'unique',
//         offset: '0',
//         end_year: '2019'
//     },
//     headers: {
//         'x-rapidapi-key': '2e8b09e3d2msh1084c477e7f77c9p1d3a48jsn5f4876882df6',
//         'x-rapidapi-host': 'unogsng.p.rapidapi.com'
//     }
// };


function NewMovies() {
    const [newMoviesData, setNewMoviesData] = useState (null);

    useEffect(() => {
        async function fetchNewMovies() {
            console.log("on mount");
            console.log("what is newMoviesData", newMoviesData);
            const response = await axios.get('https://unogsng.p.rapidapi.com/search'
                , {
                    params: {
                        start_year: '1972',
                        orderby: 'dateDesc',
                        limit: '20',
                        countrylist: '67',
                        country_andorunique: 'unique',
                        offset: '0'
                    },
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            // console.log("response newmovies",response);
            setNewMoviesData(response.data.results);
            console.log('what is response.data.results', response.data.results);
        }
        fetchNewMovies();
        // eslint-disable-next-line
    }, [ ]);



    return (
        <h1>New movies</h1>
    )
}
export default NewMovies;