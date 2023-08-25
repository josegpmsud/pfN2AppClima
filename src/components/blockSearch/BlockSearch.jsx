import axios from "axios";
import { useEffect, useState } from "react";
import { weatherApi } from "../../api/weatherApi";
import './BlockSearch.css'

//imagenes de climas
import imgClear from "../imgClime/Clear.png"
import imgHail from "../imgClime/Hail.png"
import imgHeavyCloud from "../imgClime/HeavyCloud.png"
import imgHeavyRain from "../imgClime/HeavyRain.png"
import imgLightCloud from "../imgClime/LightCloud.png"
import imgLightRain from "../imgClime/LightRain.png"
import imgShower from "../imgClime/Shower.png"
import imgSleet from "../imgClime/Sleet.png"
import imgSnow from "../imgClime/Snow.png"
import imgThunderstorm from "../imgClime/Thunderstorm.png"
import BlockDetail from "../blockDetail/BlockDetail";
//fin imagenes de clima

function BlockSearch(props) {
  const [city,setCity] = useState();
  const [nombreCity, setNombreCity] = useState();


  const obtenerCity = () => {axios.get('https://api.openweathermap.org/data/2.5/forecast?appid=e920d87ad8a741b2e9c693a7d1e336a7&q='+nombreCity)//api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}
      .then(function (response) {
        console.log(response.data);
        setCity(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      })
};

  console.log(props)
  let image=(props.list[0].weather[0].description)
  let imageI;
  if(image=="light rain"){
    imageI=imgLightRain
  }
  if(image=="moderate rain"){
    imageI=imgHeavyRain
  }
  if(image=="broken clouds"){
    imageI=imgLightCloud
  }
  if(image=="few clouds"){
    imageI=imgHeavyCloud
  }
  if(image=="overcast clouds"){
    imageI=imgHeavyCloud
  }
  if(image=="scattered clouds"){
    imageI=imgLightCloud
  }
  if(image=="clear sky"){
    imageI=imgClear
  }
  if(image=="thunderstorm"){
    imageI=imgThunderstorm
  }
  if(image=="snow"){
    imageI=imgSnow
  }
  if(image=="rain" || image=="shower rain"){
    imageI=imgShower
  }
  if(image=="mist"){
    imageI=imgLightCloud
  }
  if(image=="light snow"){
    imageI=imgSleet
  }
  

  return (
    <div className="main">
      <div className="contSearch">
      
      <section>
      <input className="input" placeholder='Ingrese Ciudad, Pais' onChange={(e)=>setNombreCity(e.target.value)}></input>
      <button className="input" onClick={obtenerCity}>Buscar</button>
      { city &&
      <>
        <h1>{nombreCity}</h1>
      </>
    }
    </section>

        <section className="btns">
          <button className="btnSearch">Search for places</button>
          <button className="btnGps">G</button>
        </section>
        <div className="contImg">      
          
          <img src={imageI} alt=""></img>
        </div>
        <h5> {props.list[0].main.temp_max}{props.uni}</h5>
        <h5> {props.list[0].weather[0].description}</h5>
        <h5> Today {props.list[0].dt_txt}</h5>
        <h4>{props.city.name}</h4>
      </div>

      <div className="contDetail">
        <section className="contUni">
          <button className="uni btnC" >°C</button>
          <button className="uni btnF" >°F</button>
        </section>

        <section className="days">
        <BlockDetail
          day="Tomorrow"
          description={props.list[8].weather[0].description}
          tepMax={props.list[8].main.temp_max}
          tepMin={props.list[8].main.temp_min}
          uni={props.uni}
        ></BlockDetail>
        <BlockDetail
          day={props.list[16].dt_txt}
          description={props.list[16].weather[0].description}
          tepMax={props.list[16].main.temp_max}
          tepMin={props.list[16].main.temp_min}
          uni={props.uni}
        ></BlockDetail>
        <BlockDetail
          day={props.list[24].dt_txt}
          description={props.list[24].weather[0].description}
          tepMax={props.list[24].main.temp_max}
          tepMin={props.list[24].main.temp_min}
          uni={props.uni}
        ></BlockDetail>
        <BlockDetail
          day={props.list[32].dt_txt}
          description={props.list[32].weather[0].description}
          tepMax={props.list[32].main.temp_max}
          tepMin={props.list[32].main.temp_min}
          uni={props.uni}
        ></BlockDetail>
        <BlockDetail
          day={props.list[39].dt_txt}
          description={props.list[39].weather[0].description}
          tepMax={props.list[39].main.temp_max}
          tepMin={props.list[39].main.temp_min}
          uni={props.uni}
        ></BlockDetail>
        </section>

        <h4>Today's Hightlights</h4>
        <section className="detailAdi">
          <article className="det">
            <h4>Humidity</h4>
            <h5> {props.list[0].main.humidity}</h5>
          </article>
          <article className="det">
            <h4>Wind Status</h4>
            <h5> {props.list[0].wind.speed}</h5>
          </article>
          <article className="det">
            <h4>Visibility</h4>
            <h5> {props.list[0].visibility}</h5>
          </article>
          <article className="det">
            <h4>Air Pressure</h4>
            <h5> {props.list[0].main.pressure}</h5>
          </article>
        </section>
      </div>
    </div>
  )
}

export default BlockSearch

/*
const [data, setData] = useState([]);


// Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("citylist.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "citylist.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  console.log(data)

<select name="select">
  
  

      {data.map((el, i) => {
       
        return(
        <div >          
          <option value="value1">{el.}</option>
                 
        </div>
        
          ) 
        })      
      }</select>





*/





/*

climas:
-Rain
light rain
moderate rain

-Clouds
broken clouds
few clouds
overcast clouds
scattered clouds

-Clear
clear sky



*/