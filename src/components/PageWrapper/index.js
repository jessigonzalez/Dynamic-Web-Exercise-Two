import React from 'react';

export default function PageWrapper({cloudy,children}){
    const wrapperOpacity = cloudy ? (cloudy * 0.01) : 0;
    const redValue = ((cloudy + 1)/100) *255;
    const blueValue = ((cloudy + 1)/125) *255;
    const greenValue = ((cloudy + 1)/ cloudy+1)*255;

    const blueSky = `135,206,235`;
    const cloudySky = `174,196,222`;
    const night = `0,0,0`;
    const currentDate = new Date();
    const currentTime = currentDate.getHours();

    let currentSky = blueSky;

    if(cloudy>50){
      currentSky = cloudySky
    }
    if(currentTime > 19 || currentTime <5){
      currentSky = night;
    }

  return(
      //<div style="height:100%; width: 100%; minHeight: 100vh; minWidth: 100vw; backgroundColor: `rgba(0,0,0,${wrapperOpacity})`">
      <div className = "PageWrapper">
        {children}
      </div>
  );
}
/*
<div style=""
  height = 100%,
  width = 100%,
  minHeight = 100vh,
  minWidth = 100vw,
  backgroundColor= `rgba(0,0,0,${wrapperOpacity})`
</div>
}>
*/
