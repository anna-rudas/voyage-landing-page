import brazil from "./images/destinations/brazil.jpg";
import medhufushi from "./images/destinations/medhufushi.jpg";
import mexico from "./images/destinations/mexico.jpg";
import thailand from "./images/destinations/thailand.jpg";
import HeadphonesIcon from "./icons/HeadphonesIcon";
import HotelRoomIcon from "./icons/HotelRoomIcon";
import TaxiIcon from "./icons/TaxiIcon";
import TourGuideIcon from "./icons/TourGuideIcon";
import shared from "./components/shared.module.css";

export const destinations = [
  {
    source: thailand,
    location: "Ao Nang, Thailand",
    duration: 4,
    reviews: 872,
  },
  {
    source: brazil,
    location: "Praia dos Carneiros, Brazil",
    duration: 10,
    reviews: 420,
  },
  {
    source: medhufushi,
    location: "Medhufushi Island Resort, Maldives",
    duration: 12,
    reviews: 690,
  },
  {
    source: mexico,
    location: "Cancún, Mexico",
    duration: 5,
    reviews: 567,
  },
];

export const services = [
  {
    service: "Airport taxi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit autem consectetur inventore officiis nemo.",
    icon: <TaxiIcon className={shared.cardIcons} />,
  },
  {
    service: "Best rooms",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, distinctio?",
    icon: <HotelRoomIcon className={shared.cardIcons} />,
  },
  {
    service: "24h costumer service",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, modi at officiis nisi distinctio facilis eius impedit.",
    icon: <HeadphonesIcon className={shared.cardIcons} />,
  },
  {
    service: "Tour guides",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, distinctio?",
    icon: <TourGuideIcon className={shared.cardIcons} />,
  },
];
