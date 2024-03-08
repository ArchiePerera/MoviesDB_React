import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"

const App = () => {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
