import { Link } from "react-scroll";
import { Logo } from "./Logo";

export const Navbar = () => {
  const socialNetworks: any[] = [
    {
      name: "Linkedin",
      link: "test",
      icon: "/assets/icons/linkedin.png",
    },
    {
      name: "Gmail",
      link: "https://www.linkedin.com/in/francisco-javier-rosa-rodr%C3%ADguez-459119200/?originalSubdomain=es",
      icon: "/assets/icons/gmail.png",
    },
    {
      name: "Github",
      link: "test",
      icon: "/assets/icons/github.png",
    },
  ];

  const menuItems = ["About", "Timeline", "Projects"];

  return (
    <nav className="navbar-container lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 flex m-auto">
      <ul className="menu md:flex hidden gap-20">
        {menuItems.map((item) => (
          <Link to={item.toLowerCase()} smooth={true} duration={500}>
            <li key={item}>{item}</li>
          </Link>
        ))}
      </ul>
      <div className="logos-container px-4 md:px-8">
        {socialNetworks.map(({ name, link, icon }) => (
          <Logo key={name} link={link} img={icon} />
        ))}
      </div>
    </nav>
  );
};
