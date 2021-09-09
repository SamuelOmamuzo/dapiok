import React from "react"
import "../sam.css"
import img3 from "../img/track-section78.png"
import img4 from "../img/preview-section6.png"

const Bottom =()=>{
    return(
        <>
            <div className="botom">
                <img src={img4} className="image2"/>
                <div className="line"><div className="line2"></div></div>
                    <p className="Des2"><b>Track</b></p>
                    <span>Follow the updates and always keeping everybody aligned on the latest API.</span>
                    <span>Review the API designing before the performance issue happens.</span>
                    <img src={img3} className="image3"/>
                    <span className="Des12"><b>Ready to work on your API?</b></span><br/>
                    <span>Dapi keeps everyone in th dev team aligned.Backend,Frontend</span>
                    <span>and PM,collaburative working in one platform.</span>
                    <button className="try2">Try FREE now<img/></button>
            </div>
        </>
    )
}
export default Bottom