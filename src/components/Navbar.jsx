import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light bg-dark">
			<div className="container">
				<Link to="/">
					<img style={{ maxHeight: "40px", }} src="https://freepngimg.com/save/23290-star-wars-logo-file/1600x738"
						alt="Star Wars" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites 
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};