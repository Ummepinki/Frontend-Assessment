import React from 'react';
import './Nav.css';
import { CgSignal } from 'react-icons/cg';
import { BiWifi2 } from 'react-icons/bi';
import { TiBatteryCharge } from 'react-icons/ti';


const Nav = () => {
    return (
        <div>
            <p className='time'>9:42</p>
            <p className='bar_1'>< CgSignal></CgSignal></p>
         
            <p className='bar_2'><BiWifi2></BiWifi2></p>
            <p className='bar_3'><TiBatteryCharge></TiBatteryCharge></p>
           
        </div>
    );
};

export default Nav;
