import PropTypes from "prop-types";

/**
 * Компонент новостной панели
 */
const YaNewsPanel = ({ newsTopics }) => {};

YaNewsPanel.propTypes = {
  /**
   * Список тем
   */
  newsTopics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      news: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default YaNewsPanel;
