import React, { Component } from 'react';
 

 class weather extends Component {
  render() {
    return <div className='d1'>
    
      <p>{this.props.weatherData?.main?.temp_max}°F</p>
   
    
    
     
    </div>
  }
}

export default weather;
