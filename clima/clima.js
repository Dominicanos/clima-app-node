const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=218c9b31e3eb43aac25d136fe93d79bc`);

    return resp.data.main.temp;
}

module.exports = {

    getClima
}