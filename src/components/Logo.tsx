export const Logo = ({ img, link }: { img: string, link?: string }) => {
  return (link ? <a href={link}><img src={img} /></a> : <img src={img} />)
}
