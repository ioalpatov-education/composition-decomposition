import PropTypes from "prop-types";

/**
 * Компонент рекламного баннера
 */
const YaAdvertisingBanner = ({ advertising }) => {};

YaAdvertisingBanner.propTypes = {
  /**
   * Информация о рекламе
   */
  advertising: PropTypes.shape({
    bannerImg: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default YaAdvertisingBanner;
