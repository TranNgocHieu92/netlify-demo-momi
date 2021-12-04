import React from "react"
import banner from './banner'
function Slide({changeSlide}) {
    return (
        <div>
            <img className="slide-img" src={changeSlide.image} alt="slide" />
        </div>
    )
}
export default Slide