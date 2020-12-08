import React from 'react'

export const NavBar = () => {
    let imgURL ="https://leonidasesteban.com/icons/icon-50x50.png";
    return (
        <nav>
            <div className="left">
                    <a className="nav-a" href="#">PokeStore</a>
                    <img  src={imgURL} alt="pokeStore-logo" className="navbar-image"/>
            </div>
            <div className="menu">
                <a className="nav-a" href="#">New Arrivals</a>
                <a className="nav-a" href="#">Products</a>
                <a className="nav-a" href="#">30% OFF</a>
            </div>
            <ul className="right">
                <li><a href="">
                    <span className="userBuy"><i class="fas fa-user"></i></span>
                    <span className="shoppingCar"><i class="fas fa-shopping-cart"></i>
                    <span className="carCount">0</span></span>
                    </a></li>
            </ul>
        </nav>
    );
}

export default NavBar;