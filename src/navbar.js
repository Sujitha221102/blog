import React from 'react';
const NavBar=()=>{
    return(
        <div className='navbar'>
            <h1 className='title'>The Dojo Blog</h1>
            <div className='btns'>
                <button className='homebtn'>Home</button>
                <button className='newblog'>New Blog</button>
            </div>
        </div>
    )
}
export default NavBar;