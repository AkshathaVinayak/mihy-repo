import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";
// import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import "./index.css";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");


const getMapKey=(env)=>{
  return  process.env.hasOwnProperty(`REACT_APP_${env}_API_KEY`)?process.env[`REACT_APP_${env}_API_KEY`]:process.env.REACT_APP_MAP_API_KEY;
}

const API_KEY = getMapKey(process.env.REACT_APP_ENV);

// const addressBoxCloseIconSymbol = {
//   position: "relative",
//   top: "8px",
//   color: "black",
//   right: "8px",
//   width: "8px",
//   height: "8px"
// };

const addressBoxStyle = {
  // opacity: 0.6,
  borderRadius: "2px",
  // -webkit-backdrop-filter:" blur(1px)",
  backdropFilter: "blur(1px)",
  backgroundColor: "white",
  boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.24)",
  fontSize: "10px !important",
  fontWeight: "normal",
  fontstyle: "normal",
  fontStretch: "normal",
  lineHeight: 1.4,
  letterSpacing: "normal",
  textAlign: "left",
  color: "black",
  padding: "10px 18px 10px 12px",
  width: "330px",
  zIndex:"100000"
};

let bounds;
let gMap;

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      global.google = window.google;
      var SlidingMarker = require("marker-animate-unobtrusive");
      SlidingMarker.initializeGlobally();
    },

    componentDidMount() {
      this.reRender(this.props);
    },

    componentWillReceiveProps(nextProps) {
      if (!isEqual(this.props, nextProps)) {
        this.reRender(nextProps);
      }
    },

    reRender(props, rndBool) {
      if (props.isDirectionShown) {
          const DirectionsService = new window.google.maps.DirectionsService();
          bounds = new window.google.maps.LatLngBounds();
          let waypts = [];
          const fitBound = () => {
            // Create bounds from markers
            if (gMap.map) {
              bounds.extend(
                new window.google.maps.LatLng(
                  props.destination.lat - 0.01,
                  props.destination.lng + 0.01
                )
              );
              for (var index in waypts) {
                var latlng = new window.google.maps.LatLng(
                  waypts[index].location.lat(),
                  waypts[index].location.lng()
                );
                bounds.extend(latlng);
              }
              // Don't zoom in too far on only one marker
              if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                var extendPoint1 = new window.window.google.maps.LatLng(
                  bounds.getNorthEast().lat() + 0.01,
                  bounds.getNorthEast().lng() + 0.01
                );
                var extendPoint2 = new window.window.google.maps.LatLng(
                  bounds.getNorthEast().lat() - 0.01,
                  bounds.getNorthEast().lng() - 0.01
                );
                bounds.extend(extendPoint1);
                bounds.extend(extendPoint2);
              }

              gMap.map.fitBounds(bounds);
            }
            // Adjusting zoom here doesn't work :/
          };
          const getDestinationDirection = () => {
            DirectionsService.route(
              {
                origin: new window.google.maps.LatLng(
                  props.source.lat,
                  props.source.lng
                ),
                destination: new window.google.maps.LatLng(
                  props.destination.lat,
                  props.destination.lng
                ),
                travelMode: window.google.maps.TravelMode.DRIVING,
                waypoints: waypts,
                optimizeWaypoints: true
              },
              (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                  this.setState({
                    directions: result,
                    waypoints: waypts
                  });
                  bounds.union(result.routes[0].bounds);
                  fitBound();
                }
              }
            );
          };
          getDestinationDirection();
        }
    }
  })
)(props =>{
  console.log(props);
  return  (
  <GoogleMap
    ref={el => {
      gMap = el;
    }}
    defaultZoom={props.zoomLevel}
    defaultCenter={isEmpty(props.defaultCenter)?{ lat: 21.7679, lng: 78.8718 }:props.defaultCenter}
    // center={props.defaultCenter}
    options={{
          mapTypeControl: false,
          draggable: true,
          fullscreenControl: false,
          scaleControl: true,
          scrollwheel: true,
          streetViewControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.LEFT_BOTTOM
          }
        }}
  >


    {props.isDirectionShown &&
      props.directions && (
        <DirectionsRenderer
          directions={props.directions}
          options={{
            preserveViewport: true,
            suppressMarkers: true,
            polylineOptions: {
              strokeColor: "#4f72ec",
              strokeOpacity: 0,
              strokeWeight: 3,
              icons: [
                {
                  icon: {
                    path: window.google.maps.SymbolPath.CIRCLE,
                    fillOpacity: 1,
                    scale: 3
                  },
                  offset: "0",
                  repeat: "1px"
                }
              ]
            }
          }}
        />
      )}
      {props.isEntityTypeShown &&
        props.entityTypes.map((entity, entityKey) => {
          if (entity.isLabelShown) {
            return (
              <Marker
                key={entityKey}
                // labelVisible={entity.labelStatus}
                // zIndex={1000}
                position={{ ...entity.position }}
                // labelAnchor={new window.google.maps.Point(0, 0)}
                // labelStyle={addressBoxStyle}
                onClick={()=>props.onInfoBoxToggle(entity.id)}
                icon={entity.icon}
                animation={window.google.maps.Animation.DROP}
              >
                {entity.labelStatus && <InfoBox
                    // visible={entity.labelStatus}
                    // onCloseClick={()=>props.onToggleOpen(entity.id,{},false)}
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                  >
                    <div style={addressBoxStyle}>
                      {entity.component}
                    </div>
                    </InfoBox>}
              </Marker>
            );
          } else {
            return (
              <Marker
                position={{ ...entity.position }}
                key={entityKey}
                icon={entity.icon}
                onClick={()=>props.onInfoBoxToggle(entity.id)}
              />
            );
          }
        })}
  </GoogleMap>
)});

export default MyMapComponent;
