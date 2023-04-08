import PropTypes from "prop-types";

/**
 * Компонент списка новостей
 */
const YaNewsList = ({ news }) => {
  const newsList = news.map((el) => {
    const { id, text, icon, link } = el;
    return (
      <div key={id}>
        <span>{icon}</span>
        <a href={link}>{text}</a>
      </div>
    );
  });

  return <>{newsList}</>;
};

YaNewsList.propTypes = {
  /**
   * Список новостей
   */
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default YaNewsList;
