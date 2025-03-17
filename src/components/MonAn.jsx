import React from 'react';
import './MonAn.css';

function MonAn(props){
    return (
        <div className='wrapper w-1/5 bg-white m-auto mt-2 ml-12'>
            <img className='block m-auto w-full' src={props.image} alt={props.title} />
            <p className='text-lg font-bold ml-2'>{props.title}</p>
            <button className='text-sm ml-2 bg-red-100 text-pink-300'>{props.times}</button>
        </div>
    );
};

export default MonAn;