import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import useLoginContext from '../hooks/useLoginContext'

const Navigation = () => {
	const { login } = useLoginContext()

	return (
		<Navbar expand="sm" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand>MyMovies</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>

						<Nav.Link as={NavLink} to="/login">{!login ? <>Login</> : <>Profile</>}</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
