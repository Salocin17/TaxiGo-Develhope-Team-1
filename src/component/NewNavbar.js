import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/NewNavbar.css';

const NewNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top gradient-navbar">
            <div className="container d-flex justify-content-center align-items-center">
                <img src='../Images/logo-black.svg' alt="Logo" className="logo-image position-absolute top-0 mt-5" />
            </div>
        </nav>
    );
};

export default NewNavbar;
