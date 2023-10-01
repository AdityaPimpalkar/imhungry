import './App.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API ?? ''
  })

  const center = {
    lat: -3.745,
    lng: -38.523
  };
  

  return (
    <div className='min-h-screen bg-slate-900 flex flex-col'>
      <div>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ height: '500px', width: '500px' }}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default App;
