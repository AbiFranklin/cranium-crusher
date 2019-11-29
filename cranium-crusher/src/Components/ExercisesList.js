import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


function ExercisesList() {
  const exercises = [
    {
        "_id": "5dd995e643fe71b923feb0f0",
        "username": "Abi",
        "description": "Biking",
        "duration": 30,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "http://abigaylefranklin.com/img/bike.png",
        "createdAt": "2019-11-23T20:26:14.318Z",
        "updatedAt": "2019-11-23T20:26:14.318Z",
        "__v": 0
    },
    {
        "_id": "5dd9963143fe71b923feb0f1",
        "username": "Abi",
        "description": "Aerobics",
        "duration": 30,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "http://abigaylefranklin.com/img/exercise.png",
        "createdAt": "2019-11-23T20:27:29.936Z",
        "updatedAt": "2019-11-23T20:27:29.936Z",
        "__v": 0
    },
    {
        "_id": "5dd9964a43fe71b923feb0f2",
        "username": "Abi",
        "description": "Weights",
        "duration": 15,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "http://abigaylefranklin.com/img/weight.png",
        "createdAt": "2019-11-23T20:27:54.082Z",
        "updatedAt": "2019-11-23T20:27:54.082Z",
        "__v": 0
    },
    {
        "_id": "5dd9966043fe71b923feb0f3",
        "username": "Abi",
        "description": "Running",
        "duration": 20,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "http://abigaylefranklin.com/img/run.png",
        "createdAt": "2019-11-23T20:28:16.633Z",
        "updatedAt": "2019-11-23T20:28:16.633Z",
        "__v": 0
    },
    {
        "_id": "5dd9967643fe71b923feb0f4",
        "username": "Abi",
        "description": "Swimming",
        "duration": 40,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "http://abigaylefranklin.com/img/swim.png",
        "createdAt": "2019-11-23T20:28:38.648Z",
        "updatedAt": "2019-11-23T20:28:38.648Z",
        "__v": 0
    },
    {
        "_id": "5dd9968643fe71b923feb0f5",
        "username": "Abi",
        "description": "Yoga",
        "duration": 30,
        "date": "2019-11-23T03:18:00.752Z",
        "pic": "http://abigaylefranklin.com/img/yoga.png",
        "createdAt": "2019-11-23T20:28:54.163Z",
        "updatedAt": "2019-11-23T20:28:54.163Z",
        "__v": 0
    }
]


  return (
    <div>
      <h1>Exercise List</h1>
      <hr/>
      <Container fluid={true}>
        <Row>
            {exercises.map(exercise => { return (
              <Col xs={12} sm={{ span:8, offset: 2 }} md={7} lg={3} xl={{span: 2, offset: 0}}>
              <Card className='card' >
              <Card.Img src={exercise.pic} />
              <Card.Body className='cardbody'>
                <Card.Title >{exercise.description}</Card.Title>
                <Card.Text>
                  <p>User: <br/>{exercise.username}</p>
                  <p>Duration: <br/>{exercise.duration}</p>
                </Card.Text>
                <Button className='editbutton' variant="secondary">Edit</Button>
              </Card.Body>
            </Card>
            </Col>
            ) })}
        </Row>
      </Container>
    </div>
  );
}

export default ExercisesList;