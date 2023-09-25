import { Link } from "react-scroll";
import { Logo } from "./Logo";
import linkedin from "../assets/images/linkedin.png";
import gmailLogo from "../assets/images/gmail.png";
import githubLogo from "../assets/images/github.png";

export const Navbar = () => {
  const socialNetworks: any[] = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/francisco-javier-rosa-rodr%C3%ADguez-459119200/?originalSubdomain=es",
      icon: linkedin,
    },
    {
      name: "Gmail",
      link: "mailto:pacorosa99@gmail.com",
      icon: gmailLogo,
    },
    {
      name: "Github",
      link: "https://github.com/frarosrod2",
      icon: githubLogo,
    },
  ];

  const menuItems = ["About", "Timeline", "Projects"];

  return (
    <nav className="navbar-container lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 flex m-auto">
      <ul className="menu md:flex hidden gap-20">
        {menuItems.map((item) => (
          <Link
            key={item}
            target="_blank"
            rel="noopener noreferrer"
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
          >
            <li className="cursor-pointer">{item}</li>
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
