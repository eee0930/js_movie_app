import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, genres, styles}) {
    return <div className={styles.movieBox}>
        <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title}/>
        <h1>{title}</h1>
        <ul className={styles.genre}>
        {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
        </Link>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;