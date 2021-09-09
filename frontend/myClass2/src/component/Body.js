import React from "react"
import "../sam.css"
import img2 from "../img/design-section2.png"

const Body =()=>{
    return(
        <>
            <div className="body">
                <div className="main">
                    <div className="line"><div className="line2"></div></div>
                    <p className="Des2"><b>Design</b></p>
                    <span>More than just editing an openAPI doc,you can define the model relationship,</span>
                    <span>draw sequence diagram to understand better the logic behind each API</span>
                    <img src={img2} className="images"/>
                    <p/>
                    <div className="line"><div className="line2"></div></div>
                    <p className="Des2"><b>Preview</b></p>
                    <span>Deploy a password-protected by API doc site and mock API sever whenever you want.</span>
                    <span>Let others in team to do the integration and review before the API is ready</span>
                </div>
            </div>
        </>
    )
}
export default Body