import { Link } from 'react-router-dom'
import './styles.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'

function Links() {
    return(
      <div className="links-container">

        <div className="links-header">
          <Link to="/">
            <FiArrowLeft size={38} color="#FFF" />
          </Link>
          <h1>Meus Links</h1>
        </div>

        <div className="links-item">
          <button className="link">
            <FiLink size={18} color="#FFF" />
            https://uol.com.br
          </button>
          <button className="link-delete">
            <FiTrash size={18} color="#FF5454" />
          </button>
        </div>
        
        <div className="links-item">
          <button className="link">
            <FiLink size={18} color="#FFF" />
            https://uol.com.br
          </button>
          <button className="link-delete">
            <FiTrash size={18} color="#FF5454" />
          </button>
        </div>

      </div>
    )
  }
  
  export default Links;