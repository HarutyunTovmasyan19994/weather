import React from "react";
import "./style.css"


const Header = ()=>{
    return(
        <div className="headerCommon">
            <div className="navDiv"></div>   
            <div className="navDiv">
                <input type="text" placeholder="City Name ..." className="searchCity"/>
                <button className="searchCityBtn"> Search City</button>    
            </div>   
            <div className="navDivRadio">
                <div>
                    <label className="label">
                        <input type="radio" name="weather"/>
                            C
                    </label>
                    <label>
                        <input type="radio" name="weather"/>
                            F
                </label>
                </div>    
            </div>   
        </div>
    )
}

export default Header