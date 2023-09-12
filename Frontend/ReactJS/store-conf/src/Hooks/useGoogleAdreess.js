import { useState, useEffect } from "react";
import axios from "axios";

const KEY = "AIzaSyA-d2AGRbY5y2hAw82a8tYSzkgazCU9Orw";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${KEY}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);
  return map;
};

export { useGoogleAddress };