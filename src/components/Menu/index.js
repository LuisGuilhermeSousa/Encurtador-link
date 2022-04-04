import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import './style.css';

function Menu(){
    return(
        <div className="menu">
        <a className="social" href="https://youtube.com/sujeitoprogramador" target="_blank" rel="noreferrer">
            <BsYoutube size={24} color="#fff" />
        </a>
        <a className="social" href="https://instagram.com/luis_guibelem"  target="_blank" rel="noreferrer">
            <BsInstagram size={24} color="#fff" />
        </a>
        <Link className="menu-item" to="/links">
            Meus Links
        </Link>
        </div>
    )
}

export default Menu;