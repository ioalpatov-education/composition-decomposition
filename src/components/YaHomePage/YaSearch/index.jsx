import PropTypes from "prop-types";

/**
 * Компонент поисковой строки.
 *
 * Включает следующие элементы: `лого`, `кнопку для показа виртуальной клавиатуры`,
 * `поле для ввода запроса`, `кнопку поиска`, `пример поискового запроса`
 */
const YaSearch = ({ randomSearchTerm }) => {};

YaSearch.propTypes = {
  /**
   * Случайный поисковый запрос для примера
   */
  randomSearchTerm: PropTypes.string.isRequired,
};

export default YaSearch;
