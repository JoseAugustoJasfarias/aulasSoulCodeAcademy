import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export function Menu() {
    return (
        <div className="menu">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button variant="link">
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/blog">Blog</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/contato">Contato</Link>
                        </Button>
                        <Button variant="link">
                        <Link to="/usuarios">Usuários</Link>
                        </Button>
                        <Button variant="link">
                        <Link to="/login">Login</Link>
                        </Button>
                        <Button variant="link">
                        <Link to="/pokemon">Pokemom </Link>
                        </Button>
                        <Button variant="link">
                        <Link to="/superherois">Super Herois </Link>
                        </Button>
                        <Button variant="link">
                        <Link to="/cadastrarEquipamentos">Cadastrar Equipamentos </Link>
                        </Button>
                        <Button variant="link">
                        <Link to="/cadastrarProgramadores">Cadastrar Programadores </Link>
                        </Button>

                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}