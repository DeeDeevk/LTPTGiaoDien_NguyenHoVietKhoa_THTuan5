import React from "react";
import avt from '../assets/avatar.png';
import './PhanGiua.css';
import MonAn from "./MonAn";
import italian_style_tomato from '../assets/Italian-style tomato.png';
import Vegetable_and_shrimp_spaghetti from '../assets/Vegetable and shrimp spaghetti.png';
import Lotus_delight_salad from '../assets/Lotus delight salad.png';
import Snack_cakes from '../assets/Snack cakes.png';
import Salad_with_cabbage from '../assets/Salad with cabbage.png';
import Bean_shrimp_and_potato_salad from '../assets/Bean, shrimp, and potato salad.png';
import Sunny_side_up_fried_eggs from '../assets/Sunny-side up fried eggs.png';
import Lotus_delight_salad_01 from '../assets/Lotus delight salad_01.png';
export default function PhanGiua() {
    return (
        <div className="container_full w-full">
            <div className="content w-4/5 flex-no-wrap m-auto">
                <h1 className="ml-12 mt-8 font-bold text-3xl">Emma Gonzalez's Recipe Box</h1>
                <div className="tren w-full h-64 flex m-auto">
                    <div className="benPhai h-64 w-1/5">
                        <img src={avt} alt="Avt" className="ml-10"/>
                    </div>
                    <div className="benTrai h-64 w-4/5">
                        <div className="traiTren text-xl text-gray-600">
                            <span>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</span>
                        </div>
                        <div className="traiDuoi w-full">
                            <button className="sub mr-8 text-xl p-2 text-pink-600 bg-white">6.5k Subcribes</button>
                            <button className="share mr-8 text-xl p-2 text-white bg-pink-600">Share</button>
                        </div>
                    </div>
                </div>
                <div className="duoi w-full flex flex-wrap justify-center">
                    <MonAn
                        image = {italian_style_tomato}
                        title = 'Italian-style tomato salad'
                        times = '14 minutes'
                    >
                    </MonAn>
                    <MonAn
                        image = {Vegetable_and_shrimp_spaghetti}
                        title = 'Vegetable and shrimp spaghetti'
                        times = '15 minutes'
                    >
                    </MonAn>
                    <MonAn
                        image = {Lotus_delight_salad}
                        title = 'Lotus delight salad'
                        times = '20 minutes'
                    >
                    </MonAn>
                    <MonAn
                        image = {Snack_cakes}
                        title = 'Snack cakes'
                        times = '21 minutes'
                    >
                    </MonAn>
                    <MonAn
                        image = {Salad_with_cabbage}
                        title = 'Salad with cabbage'
                        times = '32 minutes'
                    >
                    </MonAn>
                    <MonAn
                        image = {Bean_shrimp_and_potato_salad}
                        title = 'Bean, shrimp, and potato salad'
                        times = '32 minutes'
                    >
                    </MonAn>
                    <MonAn
                        image = {Sunny_side_up_fried_eggs}
                        title = 'Sunny-side up fried eggs'
                        times = '32 minutes'
                    >
                    </MonAn>
                    <MonAn
                        image = {Lotus_delight_salad_01}
                        title = 'Lotus delight salad'
                        times = '32 minutes'
                    >
                    </MonAn>
                </div>
            </div>
        </div>
    )
}