const axios = require('axios');

const getWeather = async (lat , lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e64298a61b74161d19c8e543b287f289&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}