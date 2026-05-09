const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

export default async function getBgImage(query) {
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=weather ${query}&orientation=landscape&per_page=1`, {
            headers: {
                Authorization: PEXELS_API_KEY
            }
        });

        const data = await response.json();
        return data.photos[0].src.large2x || null;
    } catch (error) {
        console.log("Bg image fetch error: ", error);
    }
}