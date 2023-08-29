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

  const fechaComoCadena = props.day; // día de la semana
  let numeroDia = new Date(fechaComoCadena).getDay();
  
  switch (numeroDia) {
    case 0:
      numeroDia="Sun, ";
      break;
    case 1:
      numeroDia="Tue, ";
      break;
    case 2:
      numeroDia="Mon, ";
      break;
    case 3:
      numeroDia="Wed, ";
      break;
    case 4:
        numeroDia="Thu, ";
      break;
    case 5:
        numeroDia="Fri, ";
      break;
    case 6:
        numeroDia="Sat, ";
      break;
  
    default:
      numeroDia="";
      break;
  }

  let dia =""
  if(props.day !="Tomorrow"){
    dia = new Date(fechaComoCadena).getDate();
  }
  
  
  let mes = new Date(fechaComoCadena).getMonth();
  switch (mes) {
    case 0:
      mes=" Jan";
      break;
    case 1:
      mes=" Feb";
      break;
    case 2:
      mes=" Mar";
      break;
    case 3:
      mes=" Apr";
      break;
    case 4:
      mes=" May";
      break;
    case 5:
      mes=" Jun";
      break;
    case 6:
      mes=" Jul";
      break;
    case 7:
      mes=" Aug";
      break;
      case 8:
        mes=" Sep";
      break;
      case 9:
        mes=" Oct";
      break;
      case 10:
        mes=" Nov";
      break;    
      case 11:
        mes=" Dec";
      break;
  
    default:
      mes="";
      break;
  }

  
  
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
    if(image=="heavy intensity rain"){
      imageI=imgHeavyRain
    }

    
   

  return (  
    <div className="cont">
        <p className='date'>{numeroDia}{props.day==="Tomorrow"? "Tomorrow" : dia}{mes}</p>
        <div className="contImg">
            <p>
            <img className="imageMin" src={imageI} alt={props.description}></img>
            </p>
          
        </div>
        <div className='temperatures'><span className='tem temMax'>{parseInt(props.tepMax)}{props.uni}</span> <span className='tem temMin'>{parseInt(props.tepMin)}{props.uni}</span></div>
        </div>
  )
}

export default BlockDetail