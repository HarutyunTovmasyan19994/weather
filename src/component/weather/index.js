import React,{useEffect,useState,useContext} from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import {WEATHER_INFO} from "../../redux/reducer/actionType"
import useContextData from "../context/index"
import "./index.css"


const WeatherApp = ()=>{
    const [data,setData] = useState([])
    const contextData = useContext(useContextData)
    
   
    console.log(contextData,"state")
    return(
        <div className="coomonApp">
            <div className="weather">
                <div className="weatherInfo">{contextData.name}</div>
                <div className="weatherList">2</div>
            </div>
        </div>
    )
}
export default WeatherApp
// "https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=3ab6f95dea6914e7670ba0dffe4791b0"