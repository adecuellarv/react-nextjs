"use client";
import React from 'react';
import SlotMachines from '../componets/slotMachines';
import './style.scss';
import './fonts-google.css';

const Game = () => {
    return (
        <div className='container-game'>
            <div className='div-title'>
                <h1>Tragamonedas</h1>
            </div>
            <SlotMachines />
        </div>
    );
};

export default Game;