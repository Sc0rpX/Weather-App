export default async function getWeatherData(location = "San Fransisco", dataUnit = "metric") {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${dataUnit}&elements=conditions%2Cdescription%2Cfeelslike%2Chumidity%2Cicon%2Cname%2Coffset%2Cpressure%2Csevererisk%2CsunriseEpoch%2CsunsetEpoch%2Ctemp%2Cuvindex%2Cvisibility%2Cwindspeed&include=current&key=9W4KT7888B9PFQE8H5HS3P5FS&contentType=json`);

    const data = await response.json();

    const address = data.resolvedAddress.split(',')[0];
    const temp = data.currentConditions.temp;
    const condition = data.currentConditions.conditions;
    const conditionIcon = data.currentConditions.icon;
    const humidity = data.currentConditions.humidity;
    const wind = data.currentConditions.windspeed;
    const uvIndex = data.currentConditions.uvindex;
    const feelsLike = data.currentConditions.feelslike;
    const visibility = data.currentConditions.visibility;
    const pressure = data.currentConditions.pressure;

    return {address, temp, condition, conditionIcon, humidity, wind, uvIndex, feelsLike, visibility, pressure};
}