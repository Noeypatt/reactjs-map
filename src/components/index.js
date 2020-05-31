import React, { Component } from "react";
import MapTalks from "./map-talks/Map";
import MapGoogle from "./map-google/Map";

class Map extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Maptalks 🗺️</h1>
        <a href="https://maptalks.org/">Cr. MAPTALKS</a>
        <MapTalks />
        <h1>Google Map React 🗺️</h1>
        <a href="https://www.newline.co/fullstack-react/articles/how-to-write-a-google-maps-react-component/">Cr. Google Maps React Component</a>
        <MapGoogle />
      </React.Fragment>
    );
  }
}
export default Map;
