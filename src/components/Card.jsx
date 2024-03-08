

const Card = ({data}) => {

    return (
        <>
        {data && data.map((p, i) => (
        <div  key={i} className="Card">
            <h2>{p.title}</h2>
            <p>{p.vote_count} votes</p>
            <img src={`https://image.tmdb.org/t/p/original/${p.backdrop_path}`} alt={p.title} width={300} />
            <img src={`https://image.tmdb.org/t/p/original/${p.poster_path}`} alt={p.title} width={300} />
            <p>Date de sortie : {new Date(p.release_date).toLocaleDateString()}</p>
            <h3>Résumé :</h3>
            <p>{p.overview}</p>
            <p>Note moyenne : {p.vote_average}</p>
        </div>
        
        ))}      
        </>
    )
}

export default Card