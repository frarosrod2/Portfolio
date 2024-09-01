import naturgyLogo from "../assets/images/Naturgy.png";
import jesusRosaLogo from "../assets/images/jesus-rosa-sl.png";
import wedding from "../assets/images/jesus-noe.png";

export const projects: any[] = [
  {
    id: 1,
    name: "Naturgy",
    web: "Contratación Online",
    description:
      "Maintenance of the Naturgy Online Contracting section and the Client Area, in addition to the implementation of new functionalities such as the flat rate calculator and the location search engine.",
    img: naturgyLogo,
    url: "https://www.naturgy.es/hogar/luz/tarifa_plana_zen_luz#precios-y-condiciones",
  },
  {
    id: 2,
    name: "Jesús Rosa SL",
    web: "Car workshop",
    description:
      "Web development for a car workshop to display information about their services.",
    img: jesusRosaLogo,
    url: "https://chapaypinturajesusrosa.es",
  },
  {
    id: 3,
    name: "Wedding gallery",
    web: "Wedding gallery",
    description:
      "Wedding image gallery, where guests can upload their images and vote for their favourites, similar to a social network (link is disabled because there are personal images).",
    img: wedding,
    url: "",
    disabled: true,
  },
];
