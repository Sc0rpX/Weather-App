export function getHumidityDesc(humidity) {
    switch (true) {
        case humidity <= 30:
            return "The air feels quite dry";

        case humidity <= 60:
            return "Comfortable humidity levels";

        case humidity > 60:
            return "It feels muggy and humid";


        default:
            return "Amount of moisture in the air"

    }
}

export function getWindDesc(speed, unit) {
    if (unit === "us") speed *= 1.609344;
    switch (true) {
        case speed <= 8:
            return "Just a light breeze";

        case speed <= 24:
            return "A moderate, steady breeze";

        case speed > 24:
            return "It's quite gusty out there";

        default:
            return "Current wind speed and conditions";

    }
}

export function getUvIndexDesc(uvIndex) {
    switch (true) {
        case uvIndex <= 2:
            return "Low risk of harm from the sun";


        case uvIndex <= 5:
            return "Moderate risk — grab some sunscreen";


        case uvIndex <= 7:
            return "High risk — seek shade during midday";


        case uvIndex > 7:
            return "Very high risk — avoid direct sunlight";


        default:
            return "Sun's ultraviolet radiation intensity";

    }
}

export function getFeelslikeDesc(feelsLike, temp) {
    switch (true) {
        case feelsLike < temp:
            return "Wind chill is making it feel cooler";


        case feelsLike > temp:
            return "Humidity is making it feel warmer";


        case feelsLike === temp:
            return "Feels exactly like the actual temperature";

        default:
            return "Perceived temperature";

    }
}

export function getVisibilityDesc(visibility, unit) {
    if (unit === "us") visibility *= 1.609344;

    switch (true) {
        case visibility <= 5:
            return "Poor visibility — drive safely";

        case visibility <= 15:
            return "Slightly hazy visibility";

        case visibility > 15:
            return "It's perfectly clear right now";

        default:
            return "Distance you can see clearly";
    }
}

export function getPressureDesc(pressure) {
    switch (true) {
        case pressure <= 1005:
            return "Low pressure — often brings cloudy or wet weather";

        case pressure <= 1020:
            return "Stable atmospheric conditions";

        case pressure > 1020:
            return "High pressure — usually means clear skies";

        default:
            return "Current atmospheric pressure";
    }
}