import {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import styles from '../css/Home.module.css';
import commonSt from "../css/Common.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMoives] = useState([]);

    const getMovie = async() => {
        const json = await (await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
        )).json();
        setMoives(json.data.movies);
        setLoading(false);
    };

    useEffect( () => {
        getMovie();
    }, []);

    return <div className={`${styles.bodyStyle} ${commonSt.bodyStyle}`}>
        {loading ?  
            <div className={commonSt.row}>
                <div className={commonSt.ldsRipple}>
                    <div></div><div></div>
                </div>
            </div> : 
        <div className={commonSt.row}>
            {movies.map((movie) => 
            <div className={styles.movieBoxCover} key={movie.id}>
            <Movie 
                
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title} 
                genres={movie.genres}
                styles={styles}/>
            </div>
            )}
        </div>
        }
    </div>;
}

export default Home;