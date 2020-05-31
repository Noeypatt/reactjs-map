import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            name: "Phuket",
            lat: 7.9511407,
            lng: 98.3384794,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตภูเก็ต"}
            position={{ lat: 7.8948742, lng: 98.350931 }}
          />
          <Marker />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBSfx44Vbst39S5gSLKqbo4kbqpgDo0rdE",
})(MapContainer);
