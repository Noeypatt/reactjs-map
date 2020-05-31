import * as maptalks from "maptalks";
import React, { Component } from "react";

class MapTalks extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const current = this.mapRef.current;

    const map = new maptalks.Map(current, {
      //Thailand
      // center: [101.41681, 14.8816],
      // zoom: 5,
      // minZoom: 5,
      // maxZoom: 14,

      //Bangkok
      center: [100.50709, 13.75847],
      zoom: 11,

      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
          "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d", "e"],
        attribution:
          '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
      }),

      // Marker
      layers: [
        new maptalks.VectorLayer("v", [
          new maptalks.Marker([100.49127, 13.75404]),
        ]),
      ],
    });
  }

  render() {
    return <div ref={this.mapRef} style={{ width: 500, height: 500 }} />;
  }
}

export default MapTalks;
