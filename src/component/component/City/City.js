import React from 'react';
import styles from './City.module.css';
import Temperature from '../Temperature';

const City = ({
	name,
	temperature,
	icon,
	description,
	onClick,
})=>(
	<button data-testid="CITY" onClick={onClick}>
		<h3 data-testid="NAME" className={styles.title}>{name}</h3>
		<div className={styles.temperature}>
			<Temperature>{temperature}</Temperature>
		</div>
		<img data-testid="WEATHER_ICON" className={styles.pic} src={`http://openweathermap.org/img/wn/${icon}.png`}  alt={description} />
	</button>
)


export default City;