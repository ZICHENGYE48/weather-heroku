import React from 'react';
import Weather from '../../component/component/Weather';
import styles from './Forecast.module.css';

const Forecast = () =>(
	<div data-testid="FORECAST" className={styles.wrapper}>
		<h2>Forecast</h2>
		<div className={styles.main}>
			<Weather day="MON" temperature="9" />
			<Weather day="TUE" temperature="10" />
			<Weather day="WED" temperature="11" />
			<Weather day="THU" temperature="12" />
			<Weather day="FRI" temperature="13" />
		</div>
	</div>
)

export default Forecast;