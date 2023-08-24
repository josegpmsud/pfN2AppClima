import { useState, useEffect } from 'react'
import './App.css'
import BlockSearch from './components/blockSearch/BlockSearch';
import { weatherApi } from './api/weatherApi';

function App() {

  const [weather, setWeather]=useState('');

  useEffect(() => {
    fetchData()
    async function fetchData() {
      console.log("aqui")
      const res = await weatherApi.getData("8.1141033", "-72.0204348")
      console.log(res);
      setWeather(res.data)
    }
  }, []);

  console.log(weather);
  /*
  const [weather, setWeather]=useState('');
  //const [lat, setLat] = useState(8.1141033);
  //const [log, setLog] = useState(-72.0204348);
  //const [site, setSite] = useState('Santa%20Ana,Tachira%20State,VE');

  //let latitud = 44.34//7.64
  //let longitud = 10.99//-72.28  // 7.643664, -72.277492
  //let ke= "ee400300d5b74c2989134e8460534a42" // e920d87ad8a741b2e9c693a7d1e336a7 

  //Ejemplo Conexion con la app

  //---https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e920d87ad8a741b2e9c693a7d1e336a7

  //---https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e920d87ad8a741b2e9c693a7d1e336a7

  //--api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid=ee400300d5b74c2989134e8460534a42
  //---https://api.openweathermap.org/geo/1.0/direct?q=Santa%20Ana,Tachira%20State,VE&limit=5&appid=e920d87ad8a741b2e9c693a7d1e336a7

  //---
  //---api.openweathermap.org/data/2.5/forecast/daily?lat=8.1141033&lon=-72.0204348&cnt=5&appid=e920d87ad8a741b2e9c693a7d1e336a7

  const obtenerWeather = () => {

  axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=8.1141033&lon=-72.0204348&appid=e920d87ad8a741b2e9c693a7d1e336a7') //+key   'https://api.openweathermap.org/data/2.5/forecast?lat='+{latitud}+'&lon='+{longitud}+'&appid=e920d87ad8a741b2e9c693a7d1e336a7'
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response.data);
    setWeather(response.data);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
  }
*/
  return (
    <>      
     {weather ? <BlockSearch
        {...weather}
      ></BlockSearch>: ( <h1>no hay nada</h1> ) }

      
      


    </>
  )
}

export default App

/*

<h1>App Weather</h1>
      <input placeholder='Ingrese Location' onChange={(e)=>setWeather(e.target.value)}></input>
      <button onClick={obtenerWeather}>Buscar</button>



<div>
      <h4>Ciudad: {weather.city.name}</h4>
      <h4>Cordenadas: {weather.city.coord.lat} Latitud || {weather.city.coord.lon} longitud</h4>
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
      <h5> {weather.list[0].main.temp_max} temp_max</h5>
      <h5> {weather.list[0].main.temp_min} temp_min</h5>

      <h4>Weather</h4>
      <h5> {weather.list[0].weather[0].description} description</h5>
      <h5> {weather.list[0].weather[0].main} main</h5>
      <h5> {weather.list[0].weather[0].icon} icon</h5>

      </div>


<BlockSearch
      weather={weather}
      ></BlockSearch>














  <h4>Ciudad: {JSON.stringify(weather.city.name)}</h4>
      <h4>Cordenadas: {JSON.stringify(weather.city.coord.lat)} Latitud - {JSON.stringify(weather.city.coord.lon)} longitud</h4>
      <h4>Zona Horaria: {JSON.stringify(weather.city.timezone)}</h4>

      <h4>Clima:</h4>
      <h5>Viento: {JSON.stringify(weather.list[0].wind.deg)} deg</h5>
      <h5>Viento: {JSON.stringify(weather.list[0].wind.gust)} gust</h5>
      <h5>Viento: {JSON.stringify(weather.list[0].wind.speed)} speed</h5>


*/





/*
<h1>{JSON.stringify(weather)}</h1>
*/

/*
Historia de usuario: Puedo ver el clima de la ciudad como predeterminado, preferiblemente mi ubicación actual
Historia de usuario: Puedo buscar ciudad
Historia de usuario: Puedo ver el clima de hoy y los próximos 5 días
Historia de usuario: Puedo ver la fecha y el lugar del clima
Historia de usuario: Puedo ver según imagen para cada tipo de clima
Historia de usuario: Puedo ver el grado mínimo y máximo cada día
Historia de usuario: Puedo ver el estado y la dirección del viento
Historia de usuario: Puedo ver el porcentaje de humedad
Historia de usuario: Puedo ver un indicador de visibilidad
Historia de usuario: Puedo ver el número de presión de aire
Historia de usuario (opcional): Puedo solicitar mi ubicación actual meteorológica
Historia de usuario (opcional): Puedo convertir la temperatura en Celcius a Fahrenheit y viceversa
*/