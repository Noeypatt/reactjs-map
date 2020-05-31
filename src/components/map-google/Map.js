import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Map extends Component {
  render() {
    return <div></div>;
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.APIKEY,
})(Map);
