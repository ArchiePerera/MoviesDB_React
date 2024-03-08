import { NavLink } from "react-router-dom"

const Nav = () => {


    return (
        <>
        <h1>PAJS Movie</h1>
        <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/movies">Film</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </>
    )
}

export default Nav