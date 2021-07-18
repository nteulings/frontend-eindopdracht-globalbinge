import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../backButton/BackButton";
import "./DetailInfo.css";
// import imageNotAvailable from '../assets/ImageNotAvailable.png'

const apiKey = `${process.env.REACT_APP_API_KEY}`

function SearchDetails() {
    const { nfid, clist } = useParams()
    const countryList = clist.replace(/["']/g, " ");
    console.log("params nfid, clist", nfid, clist)
    const [detailInfoData, setDetailInfoData] = useState({})

    useEffect(() => {
        async function fetchDetailInfo() {
            console.log("on mount");
            const response = await axios.get('https://unogsng.p.rapidapi.com/title'
                , {
                    params: {netflixid: nfid},
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            // console.log("response SearchMovies",response);
            console.log('what is response.data.results', response.data.results);
            setDetailInfoData(response.data.results[0]) //rerender
        }
        fetchDetailInfo();
        // eslint-disable-next-line
    }, []);

    return (
        <main className="max-width">
            <h1 className="title">DETAILINFO</h1>
            { detailInfoData && (
                <div className="detailinfo-wrapper">
                    <header className={"detail-title"}><h2 className={"title"}>{detailInfoData.title}</h2></header>
                    <img className={"info-image"}
                         src={detailInfoData.imdbposter}
                         alt={detailInfoData.title}
                    />
                    <article className="info">
                        <p className="info-text">description: {detailInfoData.synopsis}</p>
                        <p className="info-text">type:{detailInfoData.vtype}</p>
                        <p className="info-text">year: {detailInfoData.year}</p>
                        <p className="info-text">IMDB rating: {detailInfoData.imdbrating}</p>
                        <p className="info-text">available in: {countryList}</p>
                    </article>
                    <BackButton />
                </div>
            )}
        </main>
    );
}
export default SearchDetails;