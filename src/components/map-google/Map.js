import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class Map extends Component {
  render() {
    return <div></div>;
  }
}

export default GoogleApiWrapper({
  apiKey: YOUR_GOOGLE_API_KEY_GOES_HERE,
})(Map);
