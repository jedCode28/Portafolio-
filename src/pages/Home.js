import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import './index.css';

const Home = () => {
  return(
    <div style={{paddingTop: '55px'}}>
      <h1>Under Construction</h1>
      <ProgressBar animated now={45} />
    </div>
  )
}

export default Home;

// <div style={{backgroundImage: "url(" + "https://static9.depositphotos.com/1010826/1179/v/600/depositphotos_11791918-stock-illustration-tower-cranes.jpg" + ")" ,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat', 
    // height: '100vh',
    // padding: '15px'
    // }}>