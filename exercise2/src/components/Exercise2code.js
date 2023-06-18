import React, { useEffect, useState } from 'react';

function Exercise2code() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        error => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not there');
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          Latitude: {latitude} <br />
          Longitude: {longitude}
        </p>
      )}
    </div>
  );
};

export default Exercise2code;