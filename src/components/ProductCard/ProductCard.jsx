import React from 'react'
import './ProductCard.css';

const ProductCard = (props) => {

        const {titulo, precio} = props;
    return (
        <article>
            <img src="https://placehold.it/100x200" alt="Test-producto"/>
            <h3>{props.titulo}</h3>
            <p>${props.precio}</p>
        </article>
    )
}

export default ProductCard
