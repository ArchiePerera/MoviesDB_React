

const Card = ({data}) => {

    return (
        <>
        <div className="Cards">
        {data && data.map((p, i) => (
        <div  key={i} className="Card" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${p.backdrop_path}")`
        }}>
            <div className="movie-title">
                <h2>{p.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${p.poster_path}`} alt={p.title} width={300} />
            </div>
            <div className="movie-details">
                <p>Date de sortie : {new Date(p.release_date).toLocaleDateString()}</p>
                <h3>Résumé :</h3>
                <p>{p.overview}</p>
                <p>{p.vote_count} votes</p>
                <p>Note moyenne : {p.vote_average}</p>
            </div>
            <span></span>
        </div>
        ))}
        </div>     
        </>
    )
}

export default Card