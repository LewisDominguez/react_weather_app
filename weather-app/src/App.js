import React from "react";
import Titles from "./componets/Titles";
import Form from "./componets/Form";
import Weather from "./componets/Weather";

const API_KEY = "4fcd240b2095171a3d5f6f42aba04d33";

class App extends React.Component {
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);

    }
    render() {
        return (
            <div>
               <Titles />
               <Form getWeather={this.getWeather}/>
               <Weather />
            </div>
        );
    }
};

export default App;
