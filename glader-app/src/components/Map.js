import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Icon } from "leaflet"
import "../css/Map.css"


const Map = () => {
    return (
        <Box sx={{ flexGrow: 1, height: "70vh", pt: "15vh" }}>
            <MapContainer center={[44.410762156785076, -72.67473362131844]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </Box>
    );
}

export default Map;