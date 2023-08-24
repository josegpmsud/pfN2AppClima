import axios from "axios";
import { useEffect, useState } from "react";
import { weatherApi } from "../../api/weatherApi";


function BlockSearch(props) {
  console.log(props)
  return (
    <>
      <div>
        <h1>Today</h1>
        <>
        {console.log("imprimiendo desde return")}
        {console.log(props)}
        {/*console.log(props.list[0].props[0].clouds.dt_txt)*/}
        <img src="" alt=""></img>
        <h4>Ciudad: {props.city.name}</h4>
        <h5> {props.list[0].main.temp_max} temp_max</h5>
        <h5> {props.list[0].weather[0].description} description</h5>
        <h5> Today {props.list[0].dt_txt} dt_txt</h5>
        <h4>Ciudad: {props.city.name}</h4>
        <h4>Ciudad: {props.city.name}</h4>
        </>
      </div>
      </>
  )
}

export default BlockSearch

/*





 <h5> {weather.list[0].main.temp_max} temp_max</h5>
 <h5> {weather.list[0].weather[0].description} description</h5>
<h5> Today {weather.list[0].weather[0].clouds.dt_txt} dt_txt</h5>
<h4>Ciudad: {weather.city.name}</h4>
<h4>Ciudad: {weather.city.name}</h4>
*/

/*
<h4>Cordenadas: {weather.city.coord.lat} Latitud - {weather.city.coord.lon} longitud</h4>
      <h4>Zona Horaria: {weather.city.timezone}</h4>

      <h4>Wind</h4>
      <h5> {weather.list[0].wind.deg} deg</h5>
      <h5> {weather.list[0].wind.gust} gust</h5>
      <h5> {weather.list[0].wind.speed} speed</h5>

      <h4>Main</h4>
      <h5> {weather.list[0].main.feels_like} feels_like</h5>
      <h5> {weather.list[0].main.humidity} humidity</h5>
      <h5> {weather.list[0].main.temp} temp</h5>
      <h5> {weather.list[0].main.temp_kf} temp_kf</h5>
      
      <h5> {weather.list[0].main.temp_min} temp_min</h5>

      <h4>Weather</h4>
      
      <h5> {weather.list[0].weather[0].main} main</h5>
      <h5> {weather.list[0].weather[0].icon} icon</h5>


*/