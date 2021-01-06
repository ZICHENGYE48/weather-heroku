import React from 'react';
import City from './City';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<City>', () => {
	let renderResult;
	
	const props = {
		name: 'Melbourne',
		temperature: 9 ,
		icon: '03n',
		description: 'Clouds',
	};

	beforeEach(() => {
		renderResult = render(<City {...props} />);
	});

	it('should render name', () =>{
		const {getByText} = renderResult;

		expect(getByText(props.name)).toBeInTheDocument();
	});

	it('should render temperature', () =>{
		const {getByText} = renderResult;

		expect(getByText(props.temperature.toString())).toBeInTheDocument();
	});
	
	it('should render weather image', () =>{
		const {getByAltText} = renderResult;

		expect(getByAltText(props.description)).toBeInTheDocument();
		expect(getByAltText(props.description).getAttribute('src'))
			.toBe(`http://openweathermap.org/img/wn/${props.icon}.png`)
	});
})