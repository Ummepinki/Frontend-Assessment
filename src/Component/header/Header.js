import React from 'react';
import './Header.css';
import img from './../../assest/Landing page image.svg';
const Header = () => {
    return (
        <div className='text'>
       <div className='heading'>
        <h1>Image if <span className='text_color'
        > Snapchat</span> had events</h1>
       </div>
             <div className='text_1'>

                <p>Easily host and share events with your friends across any social media</p>
                </div> 

               <div className='image'>
                
               <img src={img} alt=''></img>
           
               </div>
             
        <div>
       
        </div>
              
           
         
        </div>
       
    );
};

export default Header;