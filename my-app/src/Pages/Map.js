import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

 function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 31.963158,
      lng: 35.930359
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="googleMap" style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
export default SimpleMap;