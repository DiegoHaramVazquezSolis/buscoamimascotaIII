import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { GeolocateControl, Marker } from 'react-map-gl';
import axios from 'axios';
import Body1 from '../styled/Body/Body1';
import Body2 from '../styled/Body/Body2';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZGh2cyIsImEiOiJjanc1YzE1dHAweGVjNDRzMGdqcjRndmp4In0.0ZtFIsHUnZmBwqOgFlidiQ';

const geolocateStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10
};

const Map = ({ label, instructions, draggable, onMarkerClick, onPointSelected, initialPosition }) => {
    const [viewport, setViewPort] = useState({
        width: '100%',
        height: '30vh',
        latitude: initialPosition ? initialPosition.latitude : 20.6870673,
        longitude: initialPosition ? initialPosition.longitude : -103.3526815,
        zoom: 15,
        bearing: 0,
        pitch: 0
    });
    const [marker, setMarker] = useState({
        latitude: initialPosition ? initialPosition.latitude : 20.6870673,
        longitude: initialPosition ? initialPosition.longitude : -103.3526815,
    });
    
    function onMarkerDragEnd(event) {
        changeMarker(event.lngLat[1], event.lngLat[0]);
    };

    function changeMarker(latitude, longitude){
        setMarker({ latitude: latitude, longitude: longitude });
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude}%2C%20${latitude}.json?access_token=${MAPBOX_TOKEN}`)
        .then((response) => {
            var cp = '', place = '';
            response.data.features.forEach(feature => {
                if (feature.id.indexOf('postcode') !== -1) cp = feature.text;
                else if (feature.id.indexOf('place') !== -1) place = feature.place_name;
            });
            onPointSelected(cp, place, {latitude: latitude, longitude: longitude});
        });
    }

    function onViewportChange(viewport) {
        setViewPort(viewport);
        changeMarker(viewport.latitude, viewport.longitude);
    };

    return (
        <>
            <label><Body1>{label}</Body1></label>
            <ReactMapGL
                width='100%'
                height='100%'
                mapStyle='mapbox://styles/mapbox/streets-v9'
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(viewport) => setViewPort(viewport)}
                {...viewport}>
                    {draggable &&
                        <GeolocateControl
                        style={geolocateStyle}
                        onViewportChange={onViewportChange}
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={false} />
                    }
                    <Marker 
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                        offsetTop={-20}
                        offsetLeft={-10}
                        draggable={draggable}
                        onDragEnd={onMarkerDragEnd}>
                        <i onClick={onMarkerClick} style={{ color: '#D00' }} className='fas fa-map-marker fa-lg'></i>
                    </Marker>
            </ReactMapGL>
            <Body2 style={{ color: '#828282' }}>
                {instructions}
            </Body2>
        </>
    );
}

Map.defaultProps = {
    draggable: true
};

Map.propTypes = {
    label: PropTypes.string.isRequired,
    instructions: PropTypes.element,
    onMarkerClick: PropTypes.func,
    onPointSelected: PropTypes.func.isRequired,
    draggable: PropTypes.bool,
    initialPosition: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
    })
};

export default Map;