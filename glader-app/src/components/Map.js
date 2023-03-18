import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { MapContainer, TileLayer, useMap, FeatureGroup, Circle } from 'react-leaflet'
import { EditControl } from "react-leaflet-draw"
import { Icon } from "leaflet"
import "../css/Map.css"

// https://sean-rennie.medium.com/migrating-react-leaflet-from-v2-to-v3-12d6088af191

const Map = () => {

    //   const mapInstance = useMap()
    // console.log(mapInstance)

    return (
        <Box sx={{ flexGrow: 1, height: "70vh", pt: "15vh" }}>
            <MapContainer
                center={[44.410762156785076, -72.67473362131844]}
                zoom={13}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=11ea869a02dd4a1caa40d8f89a99939e"
                />
                <FeatureGroup>
                    <EditControl
                        position='topright'
                      //  onEdited={this._onEditPath}
                      //  onCreated={this._onCreate}
                      //  onDeleted={this._onDeleted}
                        draw={{
                            rectangle: true
                        }}
                    />
                    <Circle center={[51.51, -0.06]} radius={200} />
                </FeatureGroup>
            </MapContainer>
        </Box>
    );
}

export default Map;