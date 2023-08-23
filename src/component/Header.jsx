import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Add to cart</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Badge badgeContent="5" color="primary">
                        <i
                            class="fa-solid fa-cart-shopping text-light"
                            style={{ fontSize: 25, cursor: "pointer" }}
                        ></i>
                    </Badge>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
