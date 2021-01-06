import React from 'react';
import Temperature from '../Temperature';
import pic from '../../../img/cloudy.svg';
import styles from './Weather.module.css';

const Weather = ({
	day,
	temperature
}) =>(
	<div data-testid="WEATHER" className={styles.wrapper}>
		<h3 data-testid="DAY">{day}</h3>
		<img data-testid="WEATHER_ICON" src={pic} alt="weather" />
		<div className={styles.temperature}>
			<Temperature>{temperature}</Temperature>
		</div>
	</div>
)

export default Weather;