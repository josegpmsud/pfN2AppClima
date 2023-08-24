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
  console.log("imprimiendo arreglo nuevo")
  //console.log({"cod":"200","message":0,"cnt":6,"list":[{"dt":1692921600,"main":{"temp":24.33,"feels_like":24.75,"temp_min":21.66,"temp_max":24.33,"pressure":1011,"sea_level":1011,"grnd_level":917,"humidity":74,"temp_kf":2.67},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":84},"wind":{"speed":1.21,"deg":173,"gust":1.17},"visibility":10000,"pop":0.36,"rain":{"3h":0.67},"sys":{"pod":"n"},"dt_txt":"2023-08-25 00:00:00"},{"dt":1692932400,"main":{"temp":22.53,"feels_like":22.98,"temp_min":20.96,"temp_max":22.53,"pressure":1013,"sea_level":1013,"grnd_level":918,"humidity":82,"temp_kf":1.57},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":33},"wind":{"speed":1.27,"deg":180,"gust":1.24},"visibility":10000,"pop":0.1,"sys":{"pod":"n"},"dt_txt":"2023-08-25 03:00:00"},{"dt":1692943200,"main":{"temp":20.63,"feels_like":21.02,"temp_min":20.63,"temp_max":20.63,"pressure":1013,"sea_level":1013,"grnd_level":917,"humidity":87,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":19},"wind":{"speed":0.95,"deg":181,"gust":1.18},"visibility":10000,"pop":0.12,"sys":{"pod":"n"},"dt_txt":"2023-08-25 06:00:00"},{"dt":1692954000,"main":{"temp":20.55,"feels_like":20.83,"temp_min":20.55,"temp_max":20.55,"pressure":1013,"sea_level":1013,"grnd_level":917,"humidity":83,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":43},"wind":{"speed":1.12,"deg":181,"gust":1.21},"visibility":10000,"pop":0.3,"rain":{"3h":0.35},"sys":{"pod":"n"},"dt_txt":"2023-08-25 09:00:00"},{"dt":1692964800,"main":{"temp":24.28,"feels_like":24.67,"temp_min":24.28,"temp_max":24.28,"pressure":1014,"sea_level":1014,"grnd_level":918,"humidity":73,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":39},"wind":{"speed":0.73,"deg":175,"gust":1.23},"visibility":10000,"pop":0.02,"sys":{"pod":"d"},"dt_txt":"2023-08-25 12:00:00"},{"dt":1692975600,"main":{"temp":29.05,"feels_like":29.85,"temp_min":29.05,"temp_max":29.05,"pressure":1013,"sea_level":1013,"grnd_level":919,"humidity":51,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":46},"wind":{"speed":0.92,"deg":147,"gust":2.1},"visibility":10000,"pop":0.06,"sys":{"pod":"d"},"dt_txt":"2023-08-25 15:00:00"}],"city":{"id":3646738,"name":"Caracas","coord":{"lat":10.488,"lon":-66.8792},"country":"VE","population":3000000,"timezone":-14400,"sunrise":1692872301,"sunset":1692916918}})

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
    <>
     {weather ? <BlockSearch
        {...weather}
      ></BlockSearch>: ( <h1>no hay nada</h1> ) }
    </>
  )
}

export default App


