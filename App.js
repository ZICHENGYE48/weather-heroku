import React from 'react';
import CurrentWeather from './component/CurrentWeather';
import OtherCities from './component/OtherCities';
import Forecast from './component/Forecast';
import styles from './App.module.css';

class App extends React.Component {
  render(){
  return (
    <div className={styles.app}>
      <div className={styles.weather}>
        <div className={styles.top}>
          <CurrentWeather />
        </div>
        <div className={styles.bottom}>
          <OtherCities />
          <div className={styles.divider} />
          <Forecast />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
