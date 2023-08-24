import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/"
const instance = axios.create({
    baseURL: BASE_URL
})

export const weatherApi = {
    getData: function (lat, lon) {
        return instance.get("forecast",  { params: { lat, lon, cnt: 50, appid: "e920d87ad8a741b2e9c693a7d1e336a7", units:"metric" }})
    }
}



