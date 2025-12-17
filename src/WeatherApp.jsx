import { useState } from "react";
import InfoBox from "./InfoBox";
import InputBox from "./InputBox";
import "./WeatherApp.css"

export default function WeatherApp(){
    let [weatherInfo,setweatherInfo] = useState({
        city : "Delhi",
        temp : 290.2,
        min_temp : 290.2,
        max_temp : 290.2,
        humidity : 63,
        feels_alike : 289.61,
        weather : "haze",
    });

    let updateWeaInfo = (result)=>{
        setweatherInfo(result);
    }
    
    return (
        <div className="WeatherApp">
            <h1>Weather App By Sigma</h1>
            <InputBox updateWeaInfo = {updateWeaInfo} />
            <InfoBox result = {weatherInfo}/>
        </div>
    );
}