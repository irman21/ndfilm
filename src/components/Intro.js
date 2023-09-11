import { Col, Container, Row, Button } from 'react-bootstrap';
const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex text-center justify-content-center align-items-center ">
          <Row>
            <Col>
          <div className="title">Nonton Cepet</div>
          <div className="title">Tanpa Ribet</div>
          <div className="titleButton mt-4 text-center">
            <Button variant='dark'>All List</Button>
          </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro 