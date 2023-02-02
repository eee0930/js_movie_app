import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "../css/Detail.module.css";
import commonSt from "../css/Common.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState('');
    
    const getMovie = async() => {
        const json = await (await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect( () => {
        getMovie();
    }, []);
   
    return <div className={`${styles.bodyStyle} ${commonSt.bodyStyle}`}>
        {loading? 
            <div className={commonSt.row}>
                <div className={commonSt.ldsRipple}>
                    <div></div><div></div>
                </div>
            </div> : 
            <div>
                <MovieDetail
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    description={movie.description_intro}
                    genres={movie.genres}
                    year={movie.year}
                    rating={movie.rating}
                    runtime={movie.runtime}
                    styles={styles}
                />
            </div>
        }
    </div>;
}

export default Detail;