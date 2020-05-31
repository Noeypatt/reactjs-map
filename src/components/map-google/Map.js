import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContent extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={9.3}
          initialCenter={{
            name: "Phuket",
            lat: 7.9511407,
            lng: 98.3384794,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.APIKEY,
})(MapContent);
