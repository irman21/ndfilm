import {Navbar, Container, Nav } from "react-bootstrap"


const NavigationBar = () => {
    return (
      <div>
      <Navbar variant="dark">
        <Container>
            <Navbar.Brand href="/">ND FILM</Navbar.Brand>
            <nav>
            <Nav.Link href="#superhero" >Superhero</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
           
            </nav>
        </Container>
      </Navbar>
      </div>
    )
}
  
export default NavigationBar