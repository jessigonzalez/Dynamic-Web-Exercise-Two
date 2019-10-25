import React from 'react';

export default function PageWrapper({cloudy,children}){
    const wrapperOpacity = cloudy ? (cloudy * 0.01) : 0;
    const cloudySky = "130,130,130";
    const modCloudySky = "194,204,208";
    const sunnySky = "235, 165, 111";

    if (cloudy > 30 && cloudy < 60){
      return(
        <div style={{height:'100%', width:'100%', minHeight:'100vh', minWidth:'100vw', backgroundColor:`rgba(${modCloudySky}, ${wrapperOpacity})`}}>
            {children}
        </div>
      )
    }
    if (cloudy > 60){
      return(
        <div style={{height:'100%', width:'100%', minHeight:'100vh', minWidth:'100vw', backgroundColor:`rgba(${cloudySky}, ${wrapperOpacity})`}}>
            {children}
        </div>
      )
    }
    else{
      return(
        <div style={{height:"100%",width:"100%",minHeight:"100vh",minWidth:"100vw",backgroundColor:`rgba(${sunnySky}, ${wrapperOpacity})`}}>
            {children}
        </div>
      )
    }
}
