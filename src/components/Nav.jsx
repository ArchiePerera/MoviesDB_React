import { NavLink } from "react-router-dom"

const Nav = () => {


    return (
        <>
        <nav>
        <h1><span>PAJS</span> Movies</h1>
        <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/movies">Film</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </nav>
        </>
    )
}

export default Nav