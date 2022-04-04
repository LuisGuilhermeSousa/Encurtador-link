import { FiLink } from 'react-icons/fi';
import './style.css';
import Menu from '../../components/Menu'

function Home() {
    return(
      <div className="container-home">
        
        <div className="logo">
          <img src="logo.png" alt="Sujeito Link Logo"/>
          <h1>Meus Links</h1>
          <span>Cole seu link para encurtar 👇</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#FFF" />
            <input
              placeholder="Cole seu link aqui..." 
            />
          </div>

          <button>Gerar Link</button>
        </div>
        <Menu/>

      </div>
    )
  }
  
  export default Home;