import { Card, CardGroup, ListGroup, ListGroupItem, ProgressBar } from "react-bootstrap";
import streakFlame from '../images/streaksFlame.png';


const Jects = () => {
  return(
  <CardGroup>
    <Card className='card' >
      <Card.Img variant="top" src={streakFlame} className='cardImage' />
        <Card.Body>
          <Card.Title>STREAKS</Card.Title>
            <Card.Text>
            Web application that keeps track of contests between friends and the punishments/rewards therein.
            </Card.Text>
        </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem >Technologies Used:</ListGroupItem>
        <ListGroupItem>Back-End: Ruby, Ruby/Rails & PostgreSQL/SQL</ListGroupItem>
        <ListGroupItem>Front-End: Javascript, React, CSS3, HTML5, Bootstrap & Semantic-ui</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="http://streaks-app.herokuapp.com/" style={{float: 'right'}}>Link To Application</Card.Link>
        <i class="github icon"></i>
        <Card.Link href="https://github.com/jedCode28">My GitHub</Card.Link>
      </Card.Body>
    </Card>
    <Card className='card2Main'>
      <Card.Body className='card2body'>
        <Card.Title style={{fontSize: '175%', textAlign: 'center', color: 'white'}}>More To Come!</Card.Title>
        <div className='divCard'>
          <br/>
          <ProgressBar animated variant="success" now={40} />
          <br/>
          <ProgressBar animated variant="warning" now={20} />
          <br/>
          <ProgressBar animated variant="success" now={60} />
          <br/>
          <ProgressBar animated variant="info" now={80} />
          <br/>
          <ProgressBar animated variant="warning" now={70} />
          <br/>
          <ProgressBar animated variant="danger" now={40} />
          <br/>
          <ProgressBar animated variant="warning" now={15} />
        </div>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem style={{fontSize: 'large'}}>Perhaps YOUR'S ? ?</ListGroupItem>
      </ListGroup>
      <Card.Body className='soon'>
      <i class="github icon"></i>
        <Card.Link href="https://github.com/jedCode28">My GitHub</Card.Link>
      </Card.Body>
    </Card>
  </CardGroup>
  ) 
}
export default Jects; 