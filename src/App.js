import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <header className="text-center">
        <h1>Dia dos Avós</h1>
        <p>Celebrando o amor e a sabedoria dos avós</p>
      </header>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://cms-b-assets.familysearch.org/dims4/default/9929b24/2147483647/strip/true/crop/800x500+0+0/resize/1240x775!/quality/90/?url=http%3A%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Fgrandparents-day.jpg" />
            <Card.Body>
              <Card.Title>Avôs e Avós</Card.Title>
              <Card.Text>
              Avós são a conexão com o passado, as raízes da nossa família, e o amor que transcende gerações.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.parents.com/thmb/3RH8ZDIrxOL4oNMiCYn1pw2yFvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_670139794-5d88c42b18ff4be4b83c0d272940f7c8.jpg" />
            <Card.Body>
              <Card.Title>Amor Incondicional</Card.Title>
              <Card.Text>
              Os avós são tesouros vivos, cheios de histórias e sabedoria. Seus abraços são aconchego e suas palavras são um bálsamo para a alma.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://www.heavenlycaregivers.com/wp-content/uploads/2019/09/grandparents.jpg" />
            <Card.Body>
              <Card.Title>Compartilhando Memórias</Card.Title>
              <Card.Text>
              Nas rugas dos rostos dos avós estão gravadas as experiências de uma vida. Seu amor incondicional e apoio constante são presentes que guardamos para sempre.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

//lembrar de implementar o site com inputs para cadstro.

//primeira parte criada com Chat GPT. imagens substituídas manualmente.

export default App;
