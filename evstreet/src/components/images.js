import model3 from
  '../assets/images/vehicles/tesla/model_3_main_2023_thumbnail.png';
import eTronGT from
  '../assets/images/vehicles/audi/etron_gt_main_2023_thumbnail.png';
import ev6 from '../assets/images/vehicles/kia/ev6_main_2023_thumbnail.png';

// Import images and map them to object values that will be accessed when
// filtered object values are retrieved and passed in filteredVehicleSpecs.
// So, [filteredVehicleSpecs.model] can be used to access map_vehicle_to_image
// object properties.

const map_vehicle_to_image = {
  'Model 3': model3,
  'e-tron GT': eTronGT,
  EV6: ev6,
};

export default map_vehicle_to_image;
