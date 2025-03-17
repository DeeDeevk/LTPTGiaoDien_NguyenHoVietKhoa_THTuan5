import React from "react";
import './PhanCuoi.css';
import logoMauKhac from '../assets/logoMauKhac.jpg';

export default function PhanCuoi(){
    var li1 = ['What to Cook This Week', 'Pasta', 'Dinner', 'Healthy', 'Vegetarian', 'Vegan', 'Chrismas'];
    var li2 = ['Gift Subscription', 'Send Us Facebook'];
    var li3 = ['Our Cook', 'See Our Features', 'FAQ'];
    return(
        <div className="chuaHet flex">
            <div className="fTrai w-6/12">
                <h2 className="ml-8 mt-8 text-white">About us</h2>
                <p className="ml-8 mt-8 text-gray-400 text-2xl">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                <input type="text" placeholder="Enter your email" className="ml-8 h-10 text-sm rounded"/>
                <button className="ml-5 w-20 rounded bg-pink-600 text-base text-white">Send</button>
                <div className="fTraiPhiaDuoi flex mt-48 ml-8">
                    <img src={logoMauKhac} alt="logo mau khac"/>
                    <div className="thongTinTrai mt-10 ml-8 text-xl text-gray-400">2023 Chefify company</div>
                    <div className="thongTinTrai mt-10 ml-8 text-xl text-gray-400">Term of Service| Privacy policy</div>
                </div>
            </div>
            <div className="fGiua w-3/12">
                <div className="giuaTren">
                    <h2 className="ml-40 mt-8 text-white">Learn More</h2>
                    <ul className="ml-40">
                    {li3.map((item, index) => {
                            return(
                                <li key={index} className="text-gray-400 text-xl mt-2">{item}</li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="giuaDuoi mt-48">
                    <h2 className="ml-40 mt-8 text-white">Shop</h2>
                    <ul className="ml-40">
                    {li2.map((item, index) => {
                            return(
                                <li key={index} className="text-gray-400 text-xl mt-2">{item}</li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className="fPhai w-3/12">
                <div className="giuaTren">
                    <h2 className="ml-25 mt-8 text-white">Recipes</h2>
                    <ul className="ml-24">
                        {li1.map((item, index) => {
                            return(
                                <li key={index} className="text-gray-400 text-xl mt-8">{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}