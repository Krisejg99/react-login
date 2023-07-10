import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navigation = () => {
	return (
		<Navbar expand="sm" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="/">Movie List</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/login">Login</Nav.Link>
						<Nav.Link href="/list">Movies</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
