import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar expand="sm" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand>Movie List</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
						<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
