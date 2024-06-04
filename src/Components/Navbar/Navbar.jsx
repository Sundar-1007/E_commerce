    import React from 'react';
    import { Link } from 'react-router-dom';
    import './Navbar.css';

    export const Navbar = () => {
        return (
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
                            style={{ width: "90px" }}
                            alt="" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-5 mx-auto align-items-center">
                            <li className="nav-item">
                                <div className="input-group rounded-0">
                                    <input
                                        type="text"
                                        className="form-control shadow-none rounded-0"
                                        placeholder="Search for products, Brands and More"
                                        aria-label="Search for products, Brands and More"
                                        aria-describedby="button-addon2"
                                    />
                                    <button
                                        className="btn btn-light rounded-0"
                                        type="button"
                                        id="button-addon2"
                                    >
                                        <i className="bi bi-search" />
                                    </button>
                                </div>

                            </li>
                            <li className="nav-item">
                                <Link to={'Login'} type="button" className="btn btn-light rounded-0 px-4">
                                    Login
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to={''}>
                                    Best Seller
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to={''}>
                                    More <i className="bi bi-chevron-down"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold text-decoration-underline" to={''}>
                                    Cart <i className="bi bi-cart"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
