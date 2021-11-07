import Link from "next/link";
import styles from "../styles/Nav.module.css";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

const TopNavBar = () => {
  return (
     <Navbar bg="dark" variant="dark">
     <Container>
     <Nav className="me-auto">
     <Link href="/login" passHref><Nav.Link>Login</Nav.Link></Link>
     <Link href="/search" passHref><Nav.Link>Search</Nav.Link></Link>
     </Nav>
     </Container>
   </Navbar>
  );
};

export default TopNavBar;
