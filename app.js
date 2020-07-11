const location = require('./location/location');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).help().argv;


const getInfo = async ( direccion ) => {
   
    try {
        const coords = await location.getLugarLatLng(direccion);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion} es ${ temp}`;
    } catch (err) {
        return `No se pudo determinar el clima de ${ direccion} error: ${err}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.error(err));