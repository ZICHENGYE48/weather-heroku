import React from 'react';
import Meta from '../component/Meta';
import Temperature from '../component/Temperature';
import styles from './CurrentWeather.module.css';
import getWeather from '../../api/getWeather/getWeather';
import { connect } from 'react-redux';

// const DEFAULT_CITY = "Sydney";

class CurrentWeather extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			data: null,
			loading: true,
		}
	}

	componentDidMount(){
		this.getWeather();
	}

	componentDidUpdate(props){
		if(props.city !== this.props.city)
		this.getWeather();
	}

	async getWeather (){

	const { city } = this.props;
	console.log(city);

	this.setState({
		loading: true,
	})

	const { name } = city;

	const { data } = await getWeather(name);

	this.setState({
		data,
		loading: false,
	})
	}

	render(){

		const {data ,loading} =this.state;

		return(
			<div data-testid="CURRENT" className={styles.current}>
				{loading ? (<div className={styles.loading}>Loading...</div>) :(
					<>
							<div className={styles.left}>
							<div className={styles.temperature}>
								<Temperature>{parseInt(data.main.temp)}</Temperature>
							</div>
							<span data-testid="WEATHER" className={styles.weather}>{data.weather[0].main}</span>
							<div className={styles.meta}>
								<div data-testid="HUMIDITY" className={styles.humidity}>
									<Meta title="HUMIDITY" value= {`${data.main.humidity}%`} />
								</div>
								<div className={styles.divider} />
								<div data-testid="WIND" className={styles.wind}>
									<Meta title="WIND" value= {`${parseInt(data.main.temp)}K/M`} />
								</div>
							</div>
						</div>
						<div className={styles.right}>
							<span data-testid="NAME" className={styles.city}>{data.name}</span>
							<div className={styles.shadow} />
						</div>
						</>
				)}

	</div>
		)
	}
}


// export default CurrentWeather;

const mapStateToProps = (state) =>({
	city: state.city,
})

const CurrentWeatherContainer = connect(mapStateToProps)(CurrentWeather);

export default CurrentWeatherContainer;