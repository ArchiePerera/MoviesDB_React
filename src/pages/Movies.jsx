import { useState, useEffect } from "react"
import Card from "../components/Card"

const Movies = () => {

    const [data, setData] = useState()

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmE0YjkxYmNjNGZiMmMyZDk1NGFlZjlkMmViMmU0NCIsInN1YiI6IjY0ZjBmZWZjM2E5OTM3MDExY2JkZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPjp8MlpHbSaX30XcjKyPlVcmv8-_N50jApvjq4x7bg'
        }
        };

        useEffect(() => {            
                    fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
                    .then(response => response.json())
                    .then(response => {
                    setData(response.results)
                    console.log("Test pour récupération de la Data")
                    })
                    .catch(err => console.error(err));
        }, [])

        console.log(data)

    return (
        <Card data={data}/>
    )
}

export default Movies