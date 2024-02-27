import { Container } from "react-bootstrap";
import "./assets/scss/App.scss";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MoviesPage from "./pages/MoviesPage";
import Navigation from "./components/Navigation";

const App = () => {
	return (
		<div id="App" className="bg-dark text-white">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<MoviesPage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />

					<Route path="/*" element={<NotFound />} />
				</Routes>
			</Container>

			<div className="p-2">
				<div
					hx-get="http://localhost:3000/htmx/widget"
					// hx-trigger="click"
					// hx-target="#widget-content"
					// hx-swap="innerHTML"
				>
					Get data
				</div>

				<div id="widget-content">empty</div>
			</div>
		</div>
	);
};

export default App;
