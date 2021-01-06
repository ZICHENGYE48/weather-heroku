import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5';

const get = (url, params)=>
  axios.get(`${baseUrl}${url}`,{
			params:{
				...params,
				appid: 'd3100a764757dcbafccdd87f39b8e95f',
				units: 'metric',
			},
			}
		)

export default get;