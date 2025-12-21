import "../styles/Header.css"
import resetLogo from "../assets/reset.png"


export default function Header({resetHandler}){
    return (
        <header>
            <h1 className="thick-font">CV Builder</h1>
            <img src={resetLogo} className="reset-btn" onClick={resetHandler}/>
        </header>
    )
}