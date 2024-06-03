import { Link } from "react-router-dom"
import NavBar from "../component/NavBar"

function Home() {
    return (
        <div>
            <NavBar/>
         <h1>World Wise</h1>
         <Link to ="/pricing">Pricing</Link>
        </div>
    )
}

export default Home
