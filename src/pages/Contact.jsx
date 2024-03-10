import { useState } from "react"

const Contact = () => {

    const [formInput, setFormInput] = useState({
        pseudo: "",
        movie: "",
        comments: ""
    })

    const [message, setMessage] = useState("")

    const handleChange = (e) => {

        const { name, value } = e.target
        setFormInput({...formInput, [name]:value})
        console.log(formInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const forLocalStorageData = JSON.parse(localStorage.getItem("userComments")) || []
        if(formInput.pseudo.trim() === "" || formInput.movie.trim() === "" || formInput.comments.trim() === ""){
            return setMessage("Vous ne pouvez pas envoyer de champs vides")
          }
        forLocalStorageData.push(formInput)
        localStorage.setItem("userComments", JSON.stringify(forLocalStorageData))
    }


    return(
        <>
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="pseudo">Pseudo :</label>
            <input type="text" name="pseudo" id="pseudo" onChange={handleChange} />
            <label htmlFor="movie">Le film que vous avez vu :</label>
            <input type="text" name="movie" id="movie" onChange={handleChange} />
            <label htmlFor="comments">Commentaire sur le film : </label>
            <textarea name="comments" id="comments" cols="30" rows="10" onChange={handleChange}></textarea>
            <button type="submit">Envoyer</button>
        </form>
        {message && <span className="message">{message}</span>}
        </>
    )
}

export default Contact