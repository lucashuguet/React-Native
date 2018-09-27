import React from "react";

class Meteo extends React.Component {
constructor (props) {
    super(props)
    this.state = {
        isLoaded: false,
        main: [],
        weather: [],
        name: [],
        wind: []
        }
    this.componentDidMount()
}

componentDidMount() {

fetch("http://api.openweathermap.org/data/2.5/weather?q=Toulouse&lang=fr&appid=e7f2a5dbaed3439bbbca71dd640965d3&units=metric")
 .then(res => res.json())
 .then((result) => {
     this.setState({
        isLoaded: true,
        main: result.main,
        weather: result.weather[0],
        name: result.name,
        wind: result.wind
        
     });
   })
    
}
 
    render(){
        const { main, weather, name, isLoaded, wind } = this.state;
        if (!isLoaded) {
            return <div><p className='load'>Chargement...</p></div>
        }else{
             return(
                <div>
                    <br></br>
                    <p>Ville : {name}</p><br></br>
                    <p>La température est de {main.temp}°C </p><br></br>
                    <p>Conditions : {weather.description}</p><br></br>
                    <p>Humidité : {main.humidity}%</p><br></br>
                    <p>Vent : {wind.speed} km/h</p>
                </div>
            );
        }
    }
};

export default Meteo;