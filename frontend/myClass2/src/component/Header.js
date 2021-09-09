import React from "react"
import "../sam.css"
import img from "../img/landing-logo.png"

const Header =()=>{
    return(
        <>
            <div className="haeder">
                <div className="head">
                    <div className="link">
                        
                        <div className="icon2">
                            <img className="icon" src={img}/>
                            <h3><b>Dapi</b></h3>
                        </div>
                        <div className="icon3">Changelog</div>
                        <div className="icon3">Pricing</div>
                        <div className="icon3">Contact</div>
                    </div>
                    <div className="link2">
                        <div className="log">Login</div>
                        <button className="sign">signup</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header