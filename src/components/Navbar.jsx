import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const favorites = store.favorites

	const unFavorited = (itemId) => {

		const unFavoritedItem = favorites.find(item => item.id === itemId)

		dispatch({
			type: "item_unfavorited",
			payload: { favorites: unFavoritedItem }
		})
	}

	return (
		<nav className="navbar">
			<div className="container">
				<Link to="/">
					<img style={{ maxHeight: "40px", }} src="https://freepngimg.com/save/23290-star-wars-logo-file/1600x738"
						alt="Star Wars" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge text-bg-light">{favorites.length}</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-dark">
							{store && favorites.length > 0 ? favorites.map((item) => (
								<li key={item.id} className="d-flex justify-content-between">
									<Link to={`/properties/${item.class}/${item.id}`}>
										<button className="btn text-light">{item.name}</button>
									</Link>
									<i class="fa-solid fa-trash text-danger p-2"
										onClick={() => unFavorited(item.id)}></i>
								</li>
							)) : <p className="text-center m-0">No favorites</p>}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};