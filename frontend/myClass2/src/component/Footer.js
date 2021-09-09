import React from "react"
import "../sam.css"
import img from "../img/landing-logo.png"


const Bottom =()=>{
    return(
        <>
            <div className="footer">
                <img className="icon8" src={img}/>
                <div className="head2">
                    <div className="icon32">Github.</div>
                    <div className="icon32">Twitter.</div>
                    <div className="icon32">Changelog.</div>
                    <div className="icon32">Pricing.</div>
                    <div className="icon32">Contact.</div>
                    <div className="icon32">Private Privacy.</div>
                </div>
            </div>
        </>
    )
}
export default Bottom