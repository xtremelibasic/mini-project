import React from 'react';
import './App.css';

function Header(){
    return (
        <header>
            {/* <img class="header-image" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="background" /> */}
            <div className="logo"><h1>BASE</h1></div>
            
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Orders</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;