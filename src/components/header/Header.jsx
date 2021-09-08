import React from 'react';
import Image from 'next/image'
import styles from "../header/_header.module.scss";
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"

function Header() {
    return (
        <header className="headerSection">

            {/* TOP NAV */}
            <div className="topNav">

                <div className="logo">

                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                       className="imgtag"
                    />
                </div>

                <div className="searchContainer">
                    <input className="searchInput" type="text"/>
                    <SearchIcon className="searchIcon"/>
                </div>

                <div className="rightSection">

                    <div className="navRight link">
                        <p>Hello Kennedy Freitas</p>
                        <p className="navBold">Accounts & Lists</p>
                    </div>

                    <div className="navRight link">
                        <p>Returns</p>
                        <p className="navBold">& Orders</p>
                    </div>

                    <div className="navRight link basket">

                        <span className="basketCount">4</span>

                        <ShoppingCartIcon className="shopIcon"/>
                        <p className="navBold basketTxt">Basket</p>
                    </div>
                </div>

            </div>

            {/* BOTTOM NAV */}
            <div className="bottomNav">
                <p className="bottomLink">
                    <MenuIcon className="menuIcon"/>
                    All
                </p>

                <p className="bottomLink">Prime Video</p>
                <p className="bottomLink">Amazon Busniness</p>
                <p className="bottomLink">Today's Deals</p>
                <p className="bottomLink largeLinks">Electronics</p>
                <p className="bottomLink largeLinks">Food & Groceries</p>
                <p className="bottomLink largeLinks">Prime</p>
                <p className="bottomLink largeLinks">Buy Again</p>
                <p className="bottomLink largeLinks">Shopper Toolkit</p>
                <p className="bottomLink largeLinks">Health & Personnal Care</p>
            </div>
            
        </header>
    )
}

export default Header;
