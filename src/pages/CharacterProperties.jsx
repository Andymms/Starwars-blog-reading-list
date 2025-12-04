import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

export const CharacterProperties = () => {

    const { store, dispatch } = useGlobalReducer()
    const { characterId } = useParams();

    const details = store.characters[characterId - 1]

    return (
        <>
            <div className="container mt-5">
                <div className="card mb-3 w-100 text-bg-dark" style={{ height: "400px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={details.img_url}
                                className="img-fluid rounded-start" alt="..." style={{ height: "399px" }} />
                        </div>
                        <div className="col-md-7 text-center">
                            <div className="card-body">
                                <h5 className="card-title fs-1">{details.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <table class="table table-borderless table-dark text-center">
                    <thead>
                        <tr>
                            <th scope="col" className="border-end text-danger">Birth Year</th>
                            <th scope="col" className="border-end text-danger">Eye Color</th>
                            <th scope="col" className="border-end text-danger">Gender</th>
                            <th scope="col" className="border-end text-danger">Hair color</th>
                            <th scope="col" className="border-end text-danger">Height</th>
                            <th scope="col" className="border-end text-danger">Mass</th>
                            <th scope="col" className="text-danger">Skin Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-end">{details.birth_year}</td>
                            <td className="border-end">{details.eye_color}</td>
                            <td className="border-end">{details.gender}</td>
                            <td className="border-end">{details.hair_color}</td>
                            <td className="border-end">{details.height}cm</td>
                            <td className="border-end">{details.mass}kg</td>
                            <td>{details.skin_color}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
};