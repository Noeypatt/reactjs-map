import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  componentDidMount() {
    console.log(process.env.APIKEY);
  }

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
      <div style={{ width: 100 }}>
        <Map
          google={this.props.google}
          zoom={9.3}
          initialCenter={{
            name: "Phuket",
            lat: 7.9511407,
            lng: 98.3384794,
          }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"ศูนย์ผู้สูงอายุ ตำบลไม้ขาว"}
          position={{ lat: 8.1585686, lng: 98.3124812 }}
        />
        <Marker />

        <Marker
          onClick={this.onMarkerClick}
          name={"ศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุภูเก็ต"}
          position={{ lat: 8.0164379, lng: 98.4095819 }}
        />
        <Marker />

        <Marker
          onClick={this.onMarkerClick}
          name={"กลุ่มผู้สูงอายุ หมู่ที่ 3 เชิงทะเล"}
          position={{ lat: 8.0119593, lng: 98.3033451 }}
        />
        <Marker />

        <Marker
          onClick={this.onMarkerClick}
          name={"ศูนย์ณิชา เนอสซิ่งแคร์"}
          position={{ lat: 7.914158, lng: 98.3422696 }}
        />
        <Marker />

        <Marker
          onClick={this.onMarkerClick}
          name={"กลุ่มชมรมผู้สูงอายุ ตำบลกะรน"}
          position={{ lat: 7.8080762, lng: 98.3042334 }}
        />
        <Marker />

        <Marker
          onClick={this.onMarkerClick}
          name={"ศูนย์อเนกประสงค์ผู้สูงอายุ ตำบลวิชิต"}
          position={{ lat: 7.8609959, lng: 98.3687547 }}
        />
        <Marker />

        <Marker
          onClick={this.onMarkerClick}
          name={"ศูนย์ประสานชมรมผู้สูงอายุ จังหวัดภูเก็ต"}
          position={{ lat: 7.8760293, lng: 98.3936263 }}
        />
        <Marker />

        <Marker
          onClick={this.onMarkerClick}
          name={"ภูเก็ตเนอร์สซิ่งแคร์"}
          position={{ lat: 7.9915434, lng: 98.3487641 }}
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
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.APIKEY),
})(MapContainer);
