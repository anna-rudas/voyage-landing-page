import brazil from "./images/destinations/brazil.jpg";
import medhufushi from "./images/destinations/medhufushi.jpg";
import mexico from "./images/destinations/mexico.jpg";
import thailand from "./images/destinations/thailand.jpg";
import HeadphonesIcon from "./icons/HeadphonesIcon";
import HotelRoomIcon from "./icons/HotelRoomIcon";
import TaxiIcon from "./icons/TaxiIcon";
import TourGuideIcon from "./icons/TourGuideIcon";
import * as shared from "./components/shared.module.css";
import johnSmith from "./images/testimonials/john-smith.jpg";
import janeSmith from "./images/testimonials/jane-smith.jpg";
import jessicaDoe from "./images/testimonials/jessica-doe.jpg";
import janeDone from "./images/testimonials/jane-doe.jpg";
import MailIcon from "./icons/MailIcon";
import MapDotIcon from "./icons/MapDotIcon";
import PhoneIcon from "./icons/PhoneIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

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

export const testimonies = [
  {
    name: "Jane Smith",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit autem consectetur inventore officiis nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profession: "Writer at Travel Today",
    image: janeSmith,
  },
  {
    name: "John Smith",
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profession: "Photographer at Photografia",
    image: johnSmith,
  },
  {
    name: "Jessica Doe",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, modi at officiis nisi distinctio facilis eius impedit. Eos sit autem consectetur inventore officiis nemo.",
    profession: "Influencer",
    image: jessicaDoe,
  },
  {
    name: "Jane Doe",
    testimony:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit autem consectetur inventore officiis nemo.",
    profession: "Writer at Company",
    image: janeDone,
  },
];

export const statBubbles = [
  { amount: 420, des: "clients" },
  { amount: 69, des: "tours" },
  { amount: 42, des: "countries" },
];

export const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const details = [
  {
    text: "Rathausstraße 5, 10178 Berlin",
    icon: <MapDotIcon className={shared.contactIcons} />,
  },
  {
    text: "+49 30 123456",
    icon: <PhoneIcon className={shared.contactIcons} />,
  },
  {
    text: "info@voyage.com",
    icon: <MailIcon className={shared.contactIcons} />,
  },
];

export const socialMediaLinks = [
  { name: "Instagram", icon: <InstagramIcon className={shared.footerIcons} /> },
  { name: "Twitter", icon: <TwitterIcon className={shared.footerIcons} /> },
  { name: "Facebook", icon: <FacebookIcon className={shared.footerIcons} /> },
];

export const emptyFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  text: "",
};

export const inputs = [
  { id: "name", innerText: "Name" },
  { id: "email", innerText: "Email address" },
  { id: "phone", innerText: "Phone number" },
  { id: "subject", innerText: "Subject" },
];

export const menuItems = [
  "Home",
  "Destinations",
  "Services",
  "Gallery",
  "About us",
  "Contact",
];
