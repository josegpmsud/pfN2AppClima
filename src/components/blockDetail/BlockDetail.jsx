import React from 'react'
import './BlockDetail.css'

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

//fin imagenes de clima

function BlockDetail(props) {

  
    let image=props.description
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
    <div className="cont">
        <h5>{props.day}</h5>
        <div className="contImg">
        <img className="imageMin" src={imageI} alt=""></img>
          
        </div>
        <h5> {props.tepMax}{props.uni} {props.tepMin}{props.uni}</h5>
      </div>
  )
}

export default BlockDetail