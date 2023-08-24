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
  console.log(props)
  return (
    <div className="main">
      <div className="contSearch">

        <section className="btns">
          <button className="btnSearch">Search for places</button>
          <button className="btnGps">G</button>
        </section>
        <div className="contImg">
          <img src={imgLightRain} alt=""></img>
        </div>
        <h5> {props.list[0].main.temp_max}</h5>
        <h5> {props.list[0].weather[0].description}</h5>
        <h5> Today {props.list[0].dt_txt}</h5>
        <h4>{props.city.name}</h4>
      </div>

      <div className="contDetail">
        <section className="contUni">
          <button className="uni btnC">°C</button>
          <button className="uni btnF">°F</button>
        </section>

        <section className="days">
        <BlockDetail
          day="Tomorrow"
          description={props.list[8].weather[0].description}
          tepMax={props.list[8].main.temp_max}
          tepMin={props.list[8].main.temp_min}
        ></BlockDetail>
        <BlockDetail
          day={props.list[16].dt_txt}
          description={props.list[16].weather[0].description}
          tepMax={props.list[16].main.temp_max}
          tepMin={props.list[16].main.temp_min}
        ></BlockDetail>
        <BlockDetail
          day={props.list[24].dt_txt}
          description={props.list[24].weather[0].description}
          tepMax={props.list[24].main.temp_max}
          tepMin={props.list[24].main.temp_min}
        ></BlockDetail>
        <BlockDetail
          day={props.list[32].dt_txt}
          description={props.list[32].weather[0].description}
          tepMax={props.list[32].main.temp_max}
          tepMin={props.list[32].main.temp_min}
        ></BlockDetail>
        <BlockDetail
          day={props.list[39].dt_txt}
          description={props.list[39].weather[0].description}
          tepMax={props.list[39].main.temp_max}
          tepMin={props.list[39].main.temp_min}
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