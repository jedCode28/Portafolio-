import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from "react";
import NavBar from "./components/NavBar"; 
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import background_image from './backpic.jpg';

function App() {
  return (
    <div style={{backgroundImage: `url(${background_image})` ,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    height: '100vh',
    padding: '15px',
    }} >
      <div >
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