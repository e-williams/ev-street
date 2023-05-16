import model3_main from
  "../assets/images/vehicles/tesla/model3_main_2023_crop_resize.jpeg";
import model3_front from
  "../assets/images/vehicles/tesla/model3_front_2023_crop_resize.jpeg";
import model3_rear from
  "../assets/images/vehicles/tesla/model3_rear_2023_crop_resize.jpeg";
import model3_interior from
  "../assets/images/vehicles/tesla/model3_interior_2023_crop_resize.jpeg";
import ev6_main from
  "../assets/images/vehicles/kia/ev6_main_2023_crop_resize.jpeg";
import ev6_side from
  "../assets/images/vehicles/kia/ev6_side_2023_crop_resize.jpeg";
import ev6_rear from
  "../assets/images/vehicles/kia/ev6_rear_2023_crop_resize.jpeg";
import ev6_interior from
  "../assets/images/vehicles/kia/ev6_interior_2023_crop_resize.jpeg";
import etronGT_main from
  "../assets/images/vehicles/audi/etronGT_main_2023_crop_resize.jpeg";
import etronGT_front from
  "../assets/images/vehicles/audi/etronGT_front_2023_crop_resize.jpeg";
import etronGT_rear from
  "../assets/images/vehicles/audi/etronGT_rear_2023_crop_resize.jpeg";
import etronGT_interior from
  "../assets/images/vehicles/audi/etronGT_interior_2023_crop_resize.jpeg";

const VEHICLE_IMAGE_MAP = {
  "Model 3": [
    {
      id: 0,
      filepath: model3_main,
      url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD",
    },
    {
      id: 1,
      filepath: model3_front,
      url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/1a5ba4b1-efd8-40bc-8b6d-e81bf8223e37/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-LHD",
    },
    {
      id: 2,
      filepath: model3_rear,
      url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/a7d91e4d-ba1e-41f1-b996-36fb4c925f57/bvlatuR/std/2560x1600/Model-3-AWD-Hero-Desktop-LHD",
    },
    {
      id: 3,
      filepath: model3_interior,
      url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/9a77958a-146d-40de-8a5f-0ba8af777fdf/bvlatuR/std/2560x1440/Model-3-Interior-Hero-Desktop-LHD",
    },
  ],
  EV6: [
    {
      id: 0,
      filepath: ev6_main,
      url: "https://www.kia.com/content/dam/kia/us/en/vehicles/ev6/2023/mep/in-page-gallery/kia_EV6_2023_asset-carousel-1.jpg",
    },
    {
      id: 1,
      filepath: ev6_side,
      url: "https://www.kia.com/content/dam/kia/us/en/vehicles/ev6/2023/mep/in-page-gallery/kia_EV6_2023_asset-carousel-5.jpg",
    },
    {
      id: 2,
      filepath: ev6_rear,
      url: "https://www.kia.com/content/dam/kia/us/en/vehicles/ev6/2023/mep/in-page-gallery/kia_EV6_2023_asset-carousel-2.jpg",
    },
    {
      id: 3,
      filepath: ev6_interior,
      url: "https://www.kia.com/content/dam/kia/us/en/vehicles/ev6/2023/mep/in-page-gallery/kia_EV6_2023_asset-carousel-4.jpg",
    },
  ],
  "e-tron GT": [
    {
      id: 0,
      filepath: etronGT_main,
      url: "https://www.audiusa.com/content/dam/nemo/us/models/e-tron/e-tron-gt/my23/1920x1920_eGT_2023_2301.jpg?imwidth=1440",
    },
    {
      id: 1,
      filepath: etronGT_front,
      url: "https://www.audiusa.com/content/dam/nemo/us/models/e-tron/e-tron-gt/my23/1920x1080_eGT_2023_2302.jpg?imwidth=1920&imdensity=1",
    },
    {
      id: 2,
      filepath: etronGT_rear,
      url: "https://www.audiusa.com/content/dam/nemo/us/models/e-tron/e-tron-gt/my23/1920x1080_eGT_2023_2300.jpg?imwidth=1920&imdensity=1",
    },
    {
      id: 3,
      filepath: etronGT_interior,
      url: "https://www.kia.com/content/dam/kia/us/en/vehicles/ev6/2023/mep/in-page-gallery/kia_EV6_2023_asset-carousel-4.jpg",
    },
  ],
};

export default VEHICLE_IMAGE_MAP;
