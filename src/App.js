import React,{createContext, useState,useEffect} from "react";
import Header from "./component/header";
import WeatherApp from "./component/weather"
import useContextData from "./component/context/index"


function App() {
  const [datas,setDatas] = useState([])
  useEffect(()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=3ab6f95dea6914e7670ba0dffe4791b0")
    .then(res=>res.json())
    .then(data=>console.log(setDatas({...data})))
},[])

  return (
    <useContextData.Provider value={datas}>
    
    <div>
      <Header/>
      <WeatherApp/>
    </div>
    </useContextData.Provider>
  );
}

export default App;
