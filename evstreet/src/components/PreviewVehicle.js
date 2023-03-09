import React, { useState } from "react";
import { useParams } from "react-router-dom";

import vehicleData from "../vehicleData.json";

const PreviewVehicle = () => {
  const { vehicleId } = useParams();

  const [vehicle, setVehicle] = useState(
    vehicleData.find((v) => v.id === +vehicleId)
  );

  if (!vehicle) {
    return <p>woops that vehicle doesn't exist</p>;
  }

  return (
    <>
      <h1>You are looking at vehicle</h1>
      <p>
        You are looking at {vehicle.make} and model {vehicle.model}
      </p>
    </>
  );
};

export default PreviewVehicle;
