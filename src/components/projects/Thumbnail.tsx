import naturgyLogo from "../../assets/images/Naturgy.png";

export const Thumbnail = () => {
  return (
    <div className="lg:basis-7/12 thumbnail-container w-auto lg:w-7/12">
      <a
        href="https://www.naturgy.es/hogar/luz/tarifa_plana_zen_luz#precios-y-condiciones"
        target="_blank"
        rel="noreferrer"
      >
        <img src={naturgyLogo} alt="Naturgy thumbnail" />
        <div className="thumbnail-footer">
          <span>Contratación Naturgy</span>
        </div>
      </a>
    </div>
  );
};
