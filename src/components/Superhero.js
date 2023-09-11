import { Card, Col, Container, Row, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import roobinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"
const Superhero = () => {

    return (
        <div>
    <Container>
        <br/>
        <h1 className="text-white">Superhero Movies</h1>
        <br/>
    <Row>
    <Col md={4} className="movieWrapper" id="superhero">
     <Card className="movieImage">
      <Image src={antmanImage} alt="Dune Movies" className="images" />
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">ANTMAN </Card.Title>
        <Card.Text className="text-left">Disini ada tulisannya pokonya buat deskripsi lah
        </Card.Text>
        <Card.Text className="text left">
            upload terakhir penjelasan
        </Card.Text>
        </div>
        </div>
    </Card>
     </Col>
     <Col md={4} className="movieWrapper">
     <Card className="movieImage">
      <Image src={avengerImage} alt="Dune Movies" className="images" />
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">THE AVENGER </Card.Title>
        <Card.Text className="text-left">Disini ada tulisannya pokonya buat deskripsi lah
        </Card.Text>
        <Card.Text className="text left">
            upload terakhir penjelasan
        </Card.Text>
        </div>
        </div>
    </Card>
     </Col>
     <Col md={4} className="movieWrapper">
     <Card className="movieImage">
      <Image src={batmanImage} alt="Dune Movies" className="images" />
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">THE BATMAN & ROBIN </Card.Title>
        <Card.Text className="text-left">Disini ada tulisannya pokonya buat deskripsi lah
        </Card.Text>
        <Card.Text className="text left">
            upload terakhir penjelasan
        </Card.Text>
        </div>
        </div>
    </Card>
     </Col>
     <Col md={4} className="movieWrapper">
     <Card className="movieImage">
      <Image src={roobinhoodImage} alt="Dune Movies" className="images" />
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">ROBINHOOD WAR </Card.Title>
        <Card.Text className="text-left">Disini ada tulisannya pokonya buat deskripsi lah
        </Card.Text>
        <Card.Text className="text left">
            upload terakhir penjelasan
        </Card.Text>
        </div>
        </div>
    </Card>
     </Col>
     <Col md={4} className="movieWrapper">
     <Card className="movieImage">
      <Image src={spidermanImage} alt="Dune Movies" className="images" />
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">SPIDERMAN FAR HOME</Card.Title>
        <Card.Text className="text-left">Disini ada tulisannya pokonya buat deskripsi lah
        </Card.Text>
        <Card.Text className="text left">
            upload terakhir penjelasan
        </Card.Text>
        </div>
        </div>
    </Card>
     </Col>
     <Col md={4} className="movieWrapper">
     <Card className="movieImage">
      <Image src={supermanImage} alt="Dune Movies" className="images" />
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Card.Title className="text-center">SUPERMAN IS COME </Card.Title>
        <Card.Text className="text-left">Disini ada tulisannya pokonya buat deskripsi lah
        </Card.Text>
        <Card.Text className="text left">
            upload terakhir penjelasan
        </Card.Text>
        </div>
        </div>
    </Card>
     </Col>
    </Row>
    </Container>
        </div>
    )
}
export default Superhero 
