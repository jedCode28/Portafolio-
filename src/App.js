// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavBar from "./components/NavBar"; 
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <div style={{backgroundImage: "url(src/backpic.jpg)" ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    padding: '15px',
    }} >
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App;

{/* <div style={{backgroundImage: "url(" + "https://static9.depositphotos.com/1010826/1179/v/600/depositphotos_11791918-stock-illustration-tower-cranes.jpg" + ")" ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    padding: '15px'
    }}></div> */}

    // <h1>Under Construction</h1>
    //   <ProgressBar animated now={45} />