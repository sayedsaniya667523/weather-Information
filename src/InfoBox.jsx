import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/Sunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox(info){
  let result = {
    city : info.result.city,
    temp : info.result.temp,
    min_temp : info.result.min_temp,
    max_temp : info.result.max_temp,
    humidity : info.result.humidity,
    feels_alike : info.result.feels_alike,
    weather : info.result.weather,
  }

    const rain_url = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    const hot_url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const cold_url = "https://images.unsplash.com/photo-1601931315466-3e16269515d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";


    return(
        <div className="InfoBox">
            <div className = "cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {
          result.humidity>80
          ?rain_url
          : result.temp>15 
          ? hot_url
          :cold_url
        }
 />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temparature = {result.temp}&deg;C</p>
          <p>Humidity = {result.humidity}</p>
          <p>Min_temp = {result.min_temp}&deg;C</p>
          <p>Max_temp = {result.max_temp}&deg;C</p>
          <p>
            The weather can be described as <i>{result.weather}</i> but feels like {result.feels_alike}&deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}