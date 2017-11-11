import React, { Component } from 'react';
import { withScriptjs, GoogleMap, withGoogleMap, Marker } from "react-google-maps";

export const CustomMap = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: 40.8549146, lng: -74.8042148 }}
          >
        </GoogleMap>
))
