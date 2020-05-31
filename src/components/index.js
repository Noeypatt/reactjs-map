import React, { Component } from "react";
import MapTalks from "./map-talks/Map";

class Map extends Component {
  render() {
    return (
      <div>
        <h1>Maptalks</h1>
        <MapTalks />
        <h1>Google Map React</h1>
      </div>
    );
  }
}
export default Map;
