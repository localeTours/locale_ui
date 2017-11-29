import React, { Component } from 'react';
import { withScriptjs, GoogleMap, withGoogleMap, Marker } from "react-google-maps";

export const CustomMap = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
          defaultZoom={11}
          defaultCenter={props.center}
          >
        </GoogleMap>
))
