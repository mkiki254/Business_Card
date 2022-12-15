import "./App.css"
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'


export default function App(){
    return(
        <div className="main-content">
            < Info />
            < About />
            < Interests />
            < Footer />
        </div>
    )
}