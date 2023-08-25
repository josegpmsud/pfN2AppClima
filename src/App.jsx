import { useState, useEffect } from 'react'
import './App.css'
import BlockSearch from './components/blockSearch/BlockSearch';
import { weatherApi, weatherApiCity } from './api/weatherApi';

function App() {
  const [weatherCity, setWeatherCity]=useState('');
  const [weather, setWeather]=useState('');
  const [unit,setUnit]=useState("metric");// imperial
  const [unitL,setUnitL]=useState("°C");// imperial

  function changeCelcius(){
    setUnit("metric")
    setUnitL("°C")
  }

  function changeFahrenheit(){
    setUnit("imperial")
    setUnitL("°F")
  }


  useEffect(() => {

    fetchData()
    async function fetchData() {
      console.log("aqui",unit)
      /**/
      const resCity = await weatherApiCity.getData("Caracas,VE", unit)
      console.log(resCity);
      setWeatherCity(resCity.data)
      /**/

      const res = await weatherApi.getData("8.1141033", "-72.0204348", unit)//"metric" //′N ′W // //-80.60769943317263, -126.30011238605796 //"-49.30512014747726", "69.048243706593283"
      console.log(res);
      setWeather(res.data)
    }
  }, [unit]);

  console.log(weather);
  
  /* UNA MEJOR OPCION DE URL
  https://api.openweathermap.org/data/2.5/forecast?q=caracas&cnt=6&appid=e920d87ad8a741b2e9c693a7d1e336a7
  https://api.openweathermap.org/data/2.5/forecast?q=caracas&cnt=6&appid=e920d87ad8a741b2e9c693a7d1e336a7&units=metric
  */


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

  
*/
  return (
    <div>
      <button className="uni btnC" onClick={changeCelcius}>°C</button>
      <button className="uni btnF" onClick={changeFahrenheit}>°F</button>
     {weather ? <BlockSearch
        {...weather}
        uni={unitL}

        citySelc={weatherCity}

      ></BlockSearch>: ( <h1>cargando...</h1> ) }
    </div>
  )
}

export default App


