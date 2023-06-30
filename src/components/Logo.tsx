export const Logo = ({
  img,
  link,
  alt,
}: {
  img: string;
  link?: string;
  alt?: string;
}) => {
  return link ? (
    <a href={link}>
      <img src={img} alt={alt} />
    </a>
  ) : (
    <img src={img} alt={alt} />
  );
};
