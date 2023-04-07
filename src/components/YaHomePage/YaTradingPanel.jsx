import PropTypes from "prop-types";

/**
 * Компонент панели торгов
 */
const YaTradingPanel = ({ courses }) => {};

YaTradingPanel.propTypes = {
  /**
   * Курсы валют и сырья
   */
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceChange: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default YaTradingPanel;
