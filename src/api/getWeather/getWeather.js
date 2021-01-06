import get from '../../utils/OpenWeatherMap';

const getWeather = (name)=> get('/weather',{
    q: name,
})

export default getWeather;