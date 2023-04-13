import React from 'react'
import image from "./img/pic01.jpg"; 

const HomeComponents = () => {
    return (
        <div className = "container">
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-light">
                <div>
                    <h1 className = "navbar-brand">Art Home Page </h1>
                </div>
                </nav>
            </header>      
           
           
            
            <div style={{height:850,backgroundImage:`url(${image})`}}>               
            </div>
        </div>
           
            
       
    )
}

export default HomeComponents

