import React from 'react'
import NavCart from '../NavCart/NavCart';


export const NavBar = () => {
    let imgURL ="https://leonidasesteban.com/icons/icon-50x50.png";
    return (
        <header>
        <nav className="container">
            <div className="left">
                    <a className="nav-a" href="#">PokeStore</a>
                    <img  src={imgURL} alt="pokeStore-logo" className="navbar-image"/>
            </div>
            <div className="menu">
                <a className="nav-a" href="#">New Arrivals</a>
                <a className="nav-a" href="#">Products</a>
                <a className="nav-a" href="#">30% OFF</a>
            </div>
            <NavCart />
        </nav>
        </header>
    );
}

export default NavBar;