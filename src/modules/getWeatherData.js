import { getHumidityDesc, getWindDesc, getUvIndexDesc, getFeelslikeDesc, getVisibilityDesc, getPressureDesc } from "./dynamicDescriprion.js";

export default async function getWeatherData(location, dataUnit) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${dataUnit}&elements=conditions%2Cdescription%2Cfeelslike%2Chumidity%2Cicon%2Cname%2Coffset%2Cpressure%2Csevererisk%2CsunriseEpoch%2CsunsetEpoch%2Ctemp%2Cuvindex%2Cvisibility%2Cwindspeed&include=current&key=${process.env.WEATHER_API_KEY}&contentType=json`);

    const data = await response.json();
    console.log(data);

    const isMetric = dataUnit === "metric";
    const speedUnit = isMetric ? 'km/h' : 'mph';
    const distanceUnit = isMetric ? 'km' : 'mi';
    const tempSymbol = '°';

    let heroMetrics = {
        icon: data.currentConditions.icon.replaceAll("-", "_"),
        temp: data.currentConditions.temp,
        city: data.resolvedAddress.split(',')[0],
        status: data.currentConditions.conditions,
    };

    let weatherMatrics = {
        humidity: {
            icon: 'humidity_percentage',
            title: 'Humidity',
            value: Math.round(data.currentConditions.humidity) + '%',
            unit: '',
            description: getHumidityDesc(Math.round(data.currentConditions.humidity))
        },
        wind: {
            icon: 'air',
            title: 'Wind',
            value: data.currentConditions.windspeed,
            unit: speedUnit,
            description: getWindDesc(data.currentConditions.windspeed, dataUnit)
        },
        uvIndex: {
            icon: 'light_mode',
            title: 'UV Index',
            value: data.currentConditions.uvindex,
            unit: '',
            description: getUvIndexDesc(data.currentConditions.uvindex)
        },
        feelslike: {
            icon: 'thermostat',
            title: 'Feels Like',
            value: data.currentConditions.feelslike + tempSymbol,
            unit: '',
            description: getFeelslikeDesc(data.currentConditions.feelslike, data.currentConditions.temp)
        },
        visibility: {
            icon: 'visibility',
            title: 'Visibility',
            value: data.currentConditions.visibility,
            unit: distanceUnit,
            description: getVisibilityDesc(data.currentConditions.visibility, dataUnit)
        },
        pressure: {
            icon: 'speed',
            title: 'Pressure',
            value: data.currentConditions.pressure,
            unit: 'mp',
            description: getPressureDesc(data.currentConditions.pressure)
        },
    }

    return {heroMetrics, weatherMatrics};
}
