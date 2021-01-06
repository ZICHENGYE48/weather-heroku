import React from 'react';

const Temperature = ({children}) =>(
  <div data-testid="TEMP">
    {children}
    <span>&nbsp;</span>
    <span>&#176;</span>
  </div>
)

export default Temperature;