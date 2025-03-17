import React from "react";
import './PhanDau.css';
import logo from '../assets/logo.jpg';
import avt from '../assets/avt.jpg';

export default function PhanDau() {
    var menus = ['What to cook', 'Recipes', 'Ingredients', 'Occations', 'About Us'];
    return (
        <div className="container_full w-full top w-full bg-white">
            <div className="container flex flex-no-wrap">
                <div className="logoAndSearch w-2/5 flex">
                    <div>
                        <img src={logo} alt="logo" className="logo w-40 mt-1" />
                    </div>
                    <div>
                        <input type="text" placeholder="Search" className="timKiem h-10 mt-2 ml-5 bg-gray-200 text-sm" />
                    </div>
                </div>
                <div className="phanGiua w-2/5 flex">
                    <ul className="menu mt-6 flex">
                        {menus.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href="" className="text-center leading-4 text-xl no-underline">{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="phanCuoi w-1/5 flex">
                    <div>
                        <button className="yrb w-48 h-12 mt-1 bg-red-100 text-pink-400 text-sm">You Recipe Box</button>
                    </div>
                    <div>
                        <img src={avt} alt="avatar" className="avt mt-1 h-12 w-12 ml-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}