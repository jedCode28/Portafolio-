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
        <ListGroupItem>Back-End: Ruby, Ruby/Rails, PostgreSQL/SQL</ListGroupItem>
        <ListGroupItem>Front-End: Javascript, React, CSS3, HTML5, Bootstrap, Semantic-ui</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="http://streaks-app.herokuapp.com/">Link To Application</Card.Link>
        <Card.Link href="https://github.com/jedCode28">My GitHub</Card.Link>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body className='card2'>
        <Card.Title style={{fontSize: '175%', textAlign: 'center'}}>More To Come!</Card.Title>
        <div className='divCard'>
          <ProgressBar animated variant="success" now={40} />
          <br/>
          <ProgressBar animated variant="info" now={20} />
          <ProgressBar animated variant="warning" now={60} />
          <ProgressBar animated variant="danger" now={80} />
        </div>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem >Perhaps YOUR'S ? ?</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/jedCode28">My GitHub</Card.Link>
      </Card.Body>
    </Card>
  </CardGroup>
  ) 
}
export default Jects; 