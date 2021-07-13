import React, {useEffect, useState} from "react";
import BackButton from "../components/BackButton";
import "./DetailInfo.css"

// import imageNotAvailable from '../assets/Image-Not-Available.png'
import axios from "axios";

const apiKey = `${process.env.REACT_APP_API_KEY}`

function DetailInfo() {
    const [detailInfoData, setDetailInfoData] = useState({})

    useEffect(() => {
        async function fetchDetailInfo() {
            console.log("on mount");
            const response = await axios.get('https://unogsng.p.rapidapi.com/title'
                , {
                    params: {netflixid: '80225312'},
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            // console.log("response SearchMovies",response);
            console.log('what is response.data.results', response.data.results[0]);
            setDetailInfoData(response.data.results[0]) //rerender
        }

        fetchDetailInfo();
        // eslint-disable-next-line
    }, []);


    return (
        <>
        <div>
            <h1>Detailinfo</h1>
        </div>
        <div className="detailinfo-wrapper">
            <header><h2 className={"title"}>{detailInfoData.title}</h2></header>
                <aside><img className={"info-image"}
                        src={detailInfoData.imdbposter}
                        alt={detailInfoData.title}/>
                </aside>
                <aside>
            <h3 className={"info-text"}>description:{detailInfoData.synopsis}</h3>
            <h3 className={"info-text"}>type:{detailInfoData.vtype}</h3>
            <h3 className={"info-text"}>year:{detailInfoData.year}</h3>
            <h3 className={"info-text"}>IMDB rating:{detailInfoData.imdbrating}</h3>
                </aside>
            <BackButton />
        </div>
    </>
    );
}
    export default DetailInfo;