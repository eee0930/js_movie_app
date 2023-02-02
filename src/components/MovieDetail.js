import PropTypes from 'prop-types';


function MovieDetail({id, coverImg, title, description, genres, year, rating, runtime, styles}) {

    const onClick = (event) => {
        const firstDes = document.querySelector("#firstDes");
        const secondDes = document.querySelector("#secondDes");

        firstDes.style.display = "none";
        secondDes.style.display = "block";
        event.target.style.display = "none";
    };

    return <div className={styles.movieDetail}>
        <img src={coverImg} alt={title} />
        <h1>{title} <label>({year})</label></h1>
        <div id="firstDes" className={styles.description}>
            {description.length > 150 ? 
            `${description.slice(0, 150)}...` 
            : description}
        </div>
        {description.length > 150 ? <button onClick={onClick}>more</button>: null}
        <div id="secondDes" className={styles.description} style={{display: "none"}}>{description}</div>
        <ul className={styles.genre}>
            {genres.map(
                (genre) => (
                    <li key={genre}>{genre}</li>
                )
            )}
        </ul>
        
        <label className={styles.ratingArea}>⭐️ {rating}</label>
        <label>{runtime}분</label>
    </div>
};


MovieDetail.propTypes = {
    id: PropTypes.number,
    coverImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.number,
    rating: PropTypes.number,
    runtime: PropTypes.number,
}

export default MovieDetail;