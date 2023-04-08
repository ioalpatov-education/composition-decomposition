import PropTypes from "prop-types";

/**
 * Компонент панели торгов
 */
const YaTradingPanel = ({ courses }) => {
  const coursesList = courses.map((course) => {
    const { id, link, name, price, priceChange } = course;
    return (
      <div key={id}>
        <a href={link}>{`${name} ${price}`}</a>
        <span>{priceChange}</span>
      </div>
    );
  });

  return <div>{coursesList}</div>;
};

YaTradingPanel.propTypes = {
  /**
   * Курсы валют и сырья
   */
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceChange: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default YaTradingPanel;
