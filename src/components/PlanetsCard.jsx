import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const PlanetsCard = (props) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img_url}
                    className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        Population: {props.population} <br />
                        Terrain: {props.terrain} <br />
                    </p>
                    <div className="d-flex justify-content-between">
                        <Link to={"/properties/planet/" + props.uid}>
                            <button className="btn btn-success">Learn more</button>
                        </Link>
                        <button className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};