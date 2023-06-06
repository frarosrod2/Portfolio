import { Logo } from './Logo'

export const Navbar = () => {
  const socialNetworks: any[] = [
    {
      name: 'Linkedin',
      link: 'test',
      icon: '/assets/icons/linkedin.png',
    },
    {
      name: 'Gmail',
      link: 'test',
      icon: '/assets/icons/gmail.png',
    },
    {
      name: 'Github',
      link: 'test',
      icon: '/assets/icons/github.png',
    },
  ]

  return (
    <nav className="navbar-container py-6 px-8 md:px-12">
      <div className="logos-container px-4 md:px-8">
        {socialNetworks.map((network) => (
          <Logo key={network.name} img={network.icon} />
        ))}
      </div>
    </nav>
  )
}
