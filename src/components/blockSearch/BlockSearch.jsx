


function BlockSearch() {
  return (
    <>
    <select>
        <option value="VE">Lugar 1</option>
        <option value="CO">Lugar 2</option>
        <option value="">Lugar 3</option>
        <option value="">Lugar 4</option>
      </select>
      <div>
      <h1>App Weather</h1>
      <h4>Ciudad: {weather.city.name}</h4>
      <h4>Cordenadas: {weather.city.coord.lat} Latitud - {JSON.stringify(weather.city.coord.lon)} longitud</h4>
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
      </>

  )
}

export default BlockSearch