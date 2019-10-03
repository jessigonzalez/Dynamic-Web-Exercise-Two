import React from 'react';

export default function PageWrapper({cloudy,children}){
    const wrapperOpacity = cloudy ? (cloudy * 0.01) : 0;
    const redValue = ((cloudy + 1)/100) *255;
    const blueValue = ((cloudy + 1)/125) *255;
    const greenValue = ((cloudy + 1)/ cloudy+1)*255;
  return(
    <div style={
      height: '100%';
      width:'100%';
      minHeight: '100vh';
      minWidth:'100vw';
      backgroundColor: `rgba(0,0,0,${wrapperOpacity})`
    }}>
      {children}
    </div>
  )
}
