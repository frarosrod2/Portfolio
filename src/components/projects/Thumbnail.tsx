export const Thumbnail = ({
  image,
  name,
  url,
  disabled,
}: {
  image: string;
  name: string;
  url: string;
  disabled: boolean;
}) => {
  return (
    <div className="lg:basis-7/12 thumbnail-container w-auto lg:w-7/12">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`${disabled && "disabled"}`}
      >
        <img className="" src={image} alt="Naturgy thumbnail" />
        <div className="thumbnail-footer">
          <span>{name}</span>
        </div>
      </a>
    </div>
  );
};
