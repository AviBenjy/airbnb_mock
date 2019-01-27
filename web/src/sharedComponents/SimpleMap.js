import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  
  render() {
    const{lat=34, lng=34, city} = this.props
      
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={SimpleMap.defaultProps.center}
          defaultZoom={SimpleMap.defaultProps.zoom}
        >
          <AnyReactComponent
            lat={Number(SimpleMap.defaultProps.center.lat)}
            lng={Number(SimpleMap.defaultProps.center.lng)}
            text={'yes city'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;