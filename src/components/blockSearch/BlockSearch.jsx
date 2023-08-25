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
  //const [nombreCity, setNombreCity] = useState();

  const {setSearchCity, setCity, searchCity, citySelc} = props

  console.log("Imprimiendo seleccion de ciudad desde componente blockSearch")
  console.log(props.citySelc)


  /*      */
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

  const handleSearchClick = () => {
    setCity(searchCity)
  }

  return (
    <div className="main">
      <div className="contSearch">

      <section>
      <input className="input" placeholder='Ingrese Ciudad, Pais' onChange={ (e) => setSearchCity(e.target.value) }></input>
      <button className="input" onClick={handleSearchClick}>Buscar</button>
      { citySelc &&
      <>
        <h1>{citySelc}</h1>
      </>
    }

    </section>

        <section className="btns">
          <button className="btnSearch">Search for places</button>
          <button className="btnGps">G</button>
        </section>
        <div className="contImgC">

          <img src={imageI} alt=""></img>
        </div>
        <p><span className="tempToday">{parseInt(props.list[0].main.temp_max)}</span><span className="tempTodayU">{props.uni}</span></p>
        <h5> {props.list[0].weather[0].description}</h5>
        <h5> Today {props.list[0].dt_txt}</h5>
        <h4>{props.city.name} || {props.city.country}</h4>
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

        <h3>Today's Hightlights</h3>
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

