// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.css';

function App() {
  return (
    <div style={{backgroundImage: "url(" + "https://static9.depositphotos.com/1010826/1179/v/600/depositphotos_11791918-stock-illustration-tower-cranes.jpg" + ")" ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    padding: '15px'
    }}>
      <h1>Under Construction</h1>
      <ProgressBar animated now={45} />
    </div>
    )
}

export default App;