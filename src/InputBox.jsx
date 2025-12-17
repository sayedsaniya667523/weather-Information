import "./InputBox.css"
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function InputBox({updateWeaInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_KEY =  "98721240c1fb3712295c6786fa10d50d";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"


    const getWeatherInfo = async(e)=>{
        try{
       const url = `${API_URL}?q=${city}&appid=${API_KEY}`; 
        let data = await fetch(url);
        let res = await data.json();
        let result = {
        city,
        temp : res.main.temp,
        min_temp : res.main.temp_min,
        max_temp : res.main.temp_max,
        humidity : res.main.humidity,
        feels_alike : res.main.feels_like,
        weather : res.weather[0].description,
    }
        return result;
        }catch(err){
            throw err;
        }
    }
    
    

    let handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateWeaInfo(newInfo);
            setCity("");
        }catch(err){
            setError(true);
        }
        
    }

    
    let handleChange = (e)=>{
        e.preventDefault();
        setCity(e.target.value);
    }


    return(
        <div className="InputBox">
            <form onSubmit={handleSubmit}>
        
        <TextField
          label = "enter city name"
          variant="outlined"
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit">Submit</Button>
        {error && <p style = {{color : "red"}}>No such place exists</p>}
            </form>
        </div>
    );
}