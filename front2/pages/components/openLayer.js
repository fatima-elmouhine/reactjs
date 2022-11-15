// import React, { useState, useEffect, useRef } from "react";
// import { Map, View, Feature } from "ol";
// import TileLayer from "ol/layer/Tile";
// import VectorLayer from 'ol/layer/Vector';
// import VectorSource from 'ol/source/Vector';
// import Select from 'ol/interaction/Select';
// import * as olProj from 'ol/proj';
// import Point from 'ol/geom/Point';
// import Style from 'ol/style/Style';
// import Icon from 'ol/style/Icon';
// import OSM from "ol/source/OSM";
// import Overlay from 'ol/Overlay';
// import styles from '../../styles/Map.module.css'
// import Script from 'next/script'
// import LocationOnIcon from '@mui/icons-material/LocationOn';


// const waypoints = [
//     {
//         "name": 'Waypoint 1',
//         'description': 'This is the first waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.35247,
//             'lon': 43.4,
//         }
//     },
//     {
//         'name': 'Waypoint 2',
//         'description': 'This is the second waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.44,
//             'lon': 43.5,
//         }
//     },
//     {
//         'name': 'Waypoint 3',
//         'description': 'This is the third waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.422,
//             'lon': 43.458,
//         },
//     },
//     {
//         'name': 'Waypoint 4',
//         'description': 'This is the fourth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.424,
//             'lon': 43.252,
//         }
//     },
//     {
//         'name': 'Waypoint 5',
//         'description': 'This is the fourth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.407,
//             'lon': 43.274,
//         }
//     },
//     {
//         'name': 'Waypoint 6',
//         'description': 'This is the fourth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.48,
//             'lon': 43.288,
//         }
//     },
//     {
//         'name': 'Waypoint 7',
//         'description': 'This is the fourth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.38,
//             'lon': 43.25,
//         }
//     },
//     {
//         'name': 'Waypoint 8',
//         'description': 'This is the fifth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 564877.2581354282,
//             'lon': 5409468.401813556,
//         }
//     },
//     {
//         'name': 'Waypoint 9',
//         'description': 'This is the fifth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.365284850593139,
//             'lon': 43.3053666358436,
//         }
//     },
//     {
//         'name': 'Waypoint 10',
//         'description': 'This is the fifth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.3703078196976595,
//             'lon': 43.310097640104914,
//         }
//     },
//     {
//         'name': 'Waypoint 11',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.374242790447624,
//             'lon': 43.29545103817733,
//         }
//     },
//     {
//         'name': 'Waypoint 12',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.3671227431859805,
//             'lon': 43.29576537330294,
//         }
//     },
//     {
//         'name': 'Waypoint 13',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.3705007948325525,
//             'lon': 43.30056346427591,
//         }
//     },
//     {
//         'name': 'Waypoint 14',
//         'description': 'This is the fifth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.3743649836116045,
//             'lon': 43.30039253216387,
//         }
//     },
//     {
//         'name': 'Waypoint 15',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.3799514442012155,
//             'lon': 43.3024085684917,
//         }
//     },
//     {
//         'name': 'Waypoint 16',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.385170329632361,
//             'lon': 43.299051388286074,
//         }
//     },
//     {
//         'name': 'Waypoint 17',
//         'description': 'This is the fifth waypoint',
//         'type': 'bin',
//         'position': {
//             'lat': 5.389513992901519,
//             'lon': 43.304602703745076,
//         }
//     },
//     {
//         'name': 'Waypoint 18',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.401770014376747,
//             'lon': 43.30955461103807,
//         }
//     },
//     {
//         'name': 'Waypoint 19',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.402546381154049,
//             'lon': 43.295873390730975,
//         }
//     },
//     {
//         'name': 'Waypoint 20',
//         'description': 'This is the fifth waypoint',
//         'type': 'shop',
//         'position': {
//             'lat': 5.399998531336686,
//             'lon': 43.30290701064456,
//         }
//     },
// ];

// function OpenLayer(props) {
//     const [map, setMap] = useState();
//     const mapElement = useRef();

//     useEffect(() => {
//         const initialMap = new Map({
//             target: mapElement.current,
//             layers: [
//                 new TileLayer({
//                     source: new OSM()
//                 })
//             ],
//             view: new View({
//                 center: [227267.26851132186, 5915350.827122509],
//                 zoom: 5
//             }),
//             controls: []
//         });

//         waypoints.forEach(element => {
//             var marker = new VectorLayer({
//                 source: new VectorSource({
//                     features: [
//                         new Feature({
//                             geometry: new Point(olProj.fromLonLat([element.position.lat, element.position.lon])),
//                         })
//                     ]
//                 }),
//                 type: element.type,
//                 name: element.name,
//                 description: element.description,
//                 // style: new Style({
//                     // image: new Icon({
//                     //     anchor: [0.5, 36],
//                     //     anchorXUnits: 'fraction',
//                     //     anchorYUnits: 'pixels',
//                     //     src: element.type == 'shop' ? './img/pin.svg' : './img/bin.svg',
//                     // })
//                 // })
//             });

//             marker.on('click', function (e) {
//                 var feature = e.target;
//                 var coordinates = feature.getGeometry().getCoordinates();
//                 var name = feature.get('name');
//                 var description = feature.get('description');
//                 var type = feature.get('type');

//                 var popup = new Overlay({
//                     element: document.getElementById('popup'),
//                     positioning: 'bottom-center',
//                     stopEvent: false,
//                     offset: [0, -50],
//                 });

//                 popup.setPosition(coordinates);
//                 initialMap.addOverlay(popup);

//                 document.getElementById('popup').innerHTML = name;
//             });

//             initialMap.addLayer(marker);
//         });

//         setMap(initialMap);
//     }, []);

//     return (
//         <>
//             <div className={styles.mapRow}>
//             <iframe src="https://www.google.com/maps/d/embed?mid=19zu9W_TmBLrli4HE2q_Squz_dKcDnDY&ehbc=2E312F" width="640" height="480"></iframe>
            
//                 {/* <div ref={mapElement} className={styles.mapContainer} /> */}
//             </div>
//             <div id="popup"></div>
//         </>
//     );
// }

// export default OpenLayer;