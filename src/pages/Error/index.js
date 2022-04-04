import './style.css';
import { Link } from 'react-router-dom';

function Error() {
    return(
        <div className="container-error">
            <img src="notfound.png" alt="Pagina nao encontrada" />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para a home
            </Link>
        </div>
    )
}

export default Error;