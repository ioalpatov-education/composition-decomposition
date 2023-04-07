import PropTypes from "prop-types";

/**
 * Компонент списка новостей
 */
const YaNewsList = ({ news }) => {};

YaNewsList.propTypes = {
  /**
   * Список новостей
   */
  news: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default YaNewsList;
