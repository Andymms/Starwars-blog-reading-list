import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const PlanetsCard = (props) => {

    const { store, dispatch } = useGlobalReducer()

    const planetUrlSplit = props.url.split('/')

    const planetId = planetUrlSplit[planetUrlSplit.length - 1]

    const isCharacterFavorited = store.favorites.some(
        (fav) => fav.name === props.name
    );

    const addFavorite = (character, id) => {

        const itemToFavorite = { 
            name: character,
            id: id,
            class: props.class
        }

        dispatch ({
            type: "item_favorited",
			payload: { favorites: itemToFavorite }
        })
    }

    const buttonClass = isCharacterFavorited ? "btn-warning" : "btn-outline-warning";
    const heartIcon = isCharacterFavorited ? "fa-solid fa-heart fill" : "fa-regular fa-heart no-fill";

    return (
        <>
            <div className="card mb-4 text-bg-dark" style={{ width: "18rem" }}>
                <img src={props.img_url}
                    className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        Population: {props.population} <br />
                        Climate: {props.climate} <br />
                    </p>
                    <div className="d-flex justify-content-between">
                        <Link to={"/properties/planet/" + planetId}>
                            <button className="btn btn-success">Learn more</button>
                        </Link>
                        <button className={`btn ${buttonClass} favorite`} data-bs-toggle="button"
                        onClick={() => addFavorite(props.name, planetId)}
                        disabled={isCharacterFavorited}>
                            <i className={heartIcon}></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};