import React, { Component } from "react";
import MapTalks from "./map-talks/Map";
import MapGoogle from "./map-google/Map";

class Map extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Maptalks 🗺️</h1>
        <MapTalks />
        <h1>Google Map React 🗺️</h1>
        <MapGoogle />
      </React.Fragment>
    );
  }
}
export default Map;
