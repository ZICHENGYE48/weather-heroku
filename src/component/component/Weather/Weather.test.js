import React from 'react';
import Weather from './Weather';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<Weather />', () => {
	let renderResult;

	const props = {
		day: 'MON',
		temperature: 9
	};

	beforeEach(() => {
		renderResult = render(<Weather {...props} />);
	});

	it('should render day', () =>{
		const { getByText } = renderResult; 

		expect(getByText(props.day)).toBeInTheDocument();
	});

	it('should render temperature', () =>{
		const { getByText } = renderResult; 

		expect(getByText(props.temperature.toString())).toBeInTheDocument();
	});

	
})



