import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import profpic from '../images/profpic.jpeg';
import smilepic from '../images/smilePic.JPG';
import vincent from '../images/vincent.jpg';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return(
    <div className="homie">
      <h2 style={{display:'flex', justifyContent: 'space-around', 
      marginBottom: '12px', backgroundColor: 'bisque', color:'black', borderRadius: '7px'}}>Welcome to My Web Page!</h2>
      {/* <img alt="Jed's Picture" src={profpic}></img> */}
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={profpic}
      alt="First slide"
      style={{maxHeight: '70vh', width: 'auto'}}
    />
    <Carousel.Caption style={{color: 'black', right:'3px'}}>
      <h1>Jedediah H.</h1>
      <h1>Wood</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={smilepic}
      alt="Second slide"
      style={{maxHeight: '70vh', width: 'auto'}}
    />

    <Carousel.Caption>
    <h1>Jedediah H.</h1>
      <h1>Wood</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={vincent}
      alt="Third slide"
      style={{maxHeight: '70vh', width: 'auto'}}
    />

    <Carousel.Caption>
    <h1>Jedediah H.</h1>
      <h1>Wood</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Home;