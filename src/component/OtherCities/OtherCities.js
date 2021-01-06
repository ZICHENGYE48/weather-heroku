import React from 'react';
import City from '../component/City';
import styles from './OtherCities.module.css';
import getWeathers from '../../api/getWeathers/getWeathers';
import { connect } from 'react-redux';
import setCity from '../../store/city/action/setCity';

const CITIES = [{
	name: 'Melbourne',
	id: 7839805
},{
	name: 'Perth',
	id: 2153391
},{
	name: 'Darwin',
	id: 2073124
},{
    name: 'Sydney',
    id: 2147714,
}]

class OtherCities extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: null,
			loading: true
		}
	}

	componentDidMount(){
		this.getWeathers();
	}

	async getWeathers(){

		const ids = CITIES.map((c)=>(c.id));

		const { data } = await getWeathers(ids);

		this.setState({
			data,
			loading: false
		})
	}

	render(){

		const { data, loading } = this.state;

		const { currentCity,onCityClick } = this.props;

		console.log(data);

		return(
			<div data-testid="OTHER_CITIES" className={styles.wrapper}>
				<h2 className={styles.title}>Other Cities</h2>
				{loading ? (
				<div className={styles.loading}>Loading...</div>
				):(
					<React.Fragment>
					{data.list.map((item)=>{
						if (item.id === currentCity.id) {
							return null;
						}
							return(
						<City key={item.id}
									name ={item.name}
									temperature= {parseInt(item.main.temp)}
									icon={item.weather[0].icon}
									description={item.weather[0].description}
									onClick={() =>onCityClick({
										name: item.name,
										id: item.id,
									})}/>)
					})}
					</React.Fragment>
				)
				}
			</div>
		)
	}
}

// export default OtherCities;

const mapStateToProps = (state) =>({
	currentCity: state.city,
})

const mapDispatchToProps = (dispatch) =>({
	onCityClick: (city) => dispatch(setCity(city)),
})

const OtherCitiesContainer = connect(mapStateToProps, mapDispatchToProps)(OtherCities);

export default OtherCitiesContainer;