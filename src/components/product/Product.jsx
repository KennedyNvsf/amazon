
import React,{useState} from 'react';
import styles from "../product/_product.module.scss";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter";


const Max_rating = 5;
const Min_rating = 1;

const Product = ({id, title, description, price, image, category}) => {

    const [rating] = useState(

        Math.floor(Math.random() *(Max_rating - Min_rating + 1)) + Min_rating
    );

    const [hasPrime] = useState(Math.random() < 0.5)

    return (

        <div className="productCard">

            <p className="product_category">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain"/>

            <h4 className="product_title">{title}</h4>

            <div className="ratingContainer">

                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="ratingStar"/>
                ))}
                
            </div>

            <p className="product_description">{description}</p>

            <div className="product_currency">
                <Currency quantity={price} currency="Eur"/>
            </div>

            {hasPrime && (

                <div className="product_prime">
                    <img className="product_img" src="https://links.papareact.com/fdw" alt=""/>
                    <p className="primeTxt">Free Next day Delivery</p>
                </div>
            )}

            <button className="product_btn">Add to Basket</button>
        </div>

    )
}

export default Product;