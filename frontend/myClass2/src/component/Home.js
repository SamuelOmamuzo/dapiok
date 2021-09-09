import React from "react"
import "../sam.css"
import img1 from "../img/mainshot4.png"

const Home =()=>{
    return(
        <>
            <div className="home">
                <div className="hom">
                    <span className="Des1"><b>Design,Preview and Track</b></span><br/>
                    <span className="Des"><b>the API with the Team</b></span>
                    <span>Dapj helps streamline API intergrationfor the dev team. OpenAPI,sequence diagram,<br/>API document site and mock sever.it aims for faster integration and better tracking</span>
                    <button className="try">Try FREE now<img/></button>
                    <img className="img1" src={img1}/>
                </div>
            </div>
        </>
    )
}
export default Home