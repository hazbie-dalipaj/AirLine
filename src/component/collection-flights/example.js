import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div onClick={() => console.log('click on marker')}>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 1
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='map' style={{ height: '75vh', width: '75%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBFpyyS_1uLzPdsoSY2rPDT9-E8moNm3ew"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />

          <AnyReactComponent
            lat={29.955413}
            lng={10.337844}
            text="My Marker"
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;