const axios = require('axios');

const getLugarLatLng = async( dir ) => {

    const encodedUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUrl}?geoit=json`,
        timeout: 5000,
        headers: {'Content-Type' : 'application/json'}
    });

    const resp = await instance.get();
    
    if ( encodedUrl === 'undefined' || resp.data.standard === undefined || resp.data.error !== undefined) {
        throw new Error(`No hay resultados para ${ dir}`);
    }

    const direccion = resp.data.standard.city;
    const lat = resp.data.latt;
    const lng = resp.data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}