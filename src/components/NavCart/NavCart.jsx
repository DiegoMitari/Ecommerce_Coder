import React from 'react'

export const NavCart = () => {
    return (
            <ul className="right">
                <li><a href="">
                    <span className="userBuy"><i class="fas fa-user"></i></span>
                    <span className="shoppingCar"><i class="fas fa-shopping-cart"></i>
                    <span className="carCount">0</span></span>
                    </a></li>
            </ul>
    )
}

export default NavCart