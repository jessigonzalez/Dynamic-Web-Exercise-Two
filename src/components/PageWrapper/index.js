import React from 'react';

export default function PageWrapper({cloudy,children}){
    const wrapperOpacity = cloudy ? (cloudy * 0.01) : 0;
    const currentSky = "170,180,186";
    const updatedCurrentSky = "242, 194, 155";

    if (cloudy > 80){
      return(
        <div style={{height:"100%",width:"100%",minHeight:"100vh",minWidth:"100vw",backgroundColor:`rgba(${currentSky}, ${wrapperOpacity})`}}>
          <div className="PageWrapper cloudyVersion">
            {children}
          </div>
        </div>
      )
    }
    else{
      return(
        <div style={{height:"100%",width:"100%",minHeight:"100vh",minWidth:"100vw",backgroundColor:`rgba(${updatedCurrentSky}, ${wrapperOpacity})`}}>
          <div className="PageWrapper sunnyVersion">
            {children}
          </div>
        </div>
      )
    }
}
