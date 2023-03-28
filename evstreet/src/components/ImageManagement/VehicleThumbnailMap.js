import model3 from
  "../../assets/images/vehicles/tesla/model3_main_2023_thumbnail.png";
import ev6 from "../../assets/images/vehicles/kia/ev6_main_2023_thumbnail.png";
import etronGT from
  "../../assets/images/vehicles/audi/etronGT_main_2023_thumbnail.png";

// Import images and map them to object values that will be accessed when
// filtered object values are retrieved and passed in filteredVehicleSpecs.
// So, [filteredVehicleSpecs.model] can be used to access VehicleThumbnailMap
// object properties.

const VehicleThumbnailMap = {
  "Model 3": {
    filepath: model3,
    url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD",
  },
  EV6: {
    filepath: ev6,
    url: "https://www.kia.com/content/dam/kia/us/en/vehicles/ev6/2023/mep/in-page-gallery/kia_EV6_2023_asset-carousel-1.jpg",
  },
  "e-tron GT": {
    filepath: etronGT,
    url: "https://www.audiusa.com/content/dam/nemo/us/models/e-tron/e-tron-gt/my23/1920x1920_eGT_2023_2301.jpg?imwidth=1440",
  },
}

export default VehicleThumbnailMap;
