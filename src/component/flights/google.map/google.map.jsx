import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div onClick={() => console.log('Click on marker!', text)}>{text}</div>; 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.9833333,
      lng: 23.7333333
    },
    zoom: 1
  };
 
  render() {
    return (
      <div className='map' style={{ height: '75vh', width: '203vh'}}>
        <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyBFpyyS_1uLzPdsoSY2rPDT9-E8moNm3ew"}} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <AnyReactComponent lat={55.585901} lng={-105.750596} text="Marker Canada" />
          <AnyReactComponent lat={35.8600198} lng={104.165802} text="Marker China" />
          <AnyReactComponent lat={52.8536597} lng={-1.0825582} text="Marker England" />
          <AnyReactComponent lat={50.6275416} lng={9.9584503} text="Marker Germany" />
          <AnyReactComponent lat={42.7631902} lng={12.2515222} text="Marker Italy" />
          <AnyReactComponent lat={39.6584701} lng={-8.2444602} text="Marker Portugal" />          
        </GoogleMapReact>
      </div>
    );
  }
} 
export default SimpleMap;