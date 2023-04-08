import PropTypes from "prop-types";

/**
 * Компонент информационной карточки
 */
const YaInfoCard = (props) => {
  const { children, title, imgSrc, imgAlt } = props;
  const img = !!imgSrc ? <img src={imgSrc} alt={imgAlt} /> : null;

  return (
    <div>
      <header>
        {img}
        {title}
      </header>
      <div>{children}</div>
    </div>
  );
};

YaInfoCard.propTypes = {
  /**
   * Информация об изображении над заголовком
   */
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  /**
   * Заголовок
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default YaInfoCard;
