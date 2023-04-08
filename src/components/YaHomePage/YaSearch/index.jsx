import YaKeyboard from "./YaKeyboard";
import PropTypes from "prop-types";

/**
 * Компонент поисковой строки.
 *
 * Включает следующие элементы: `лого`, `кнопку для показа виртуальной клавиатуры`,
 * `поле для ввода запроса`, `кнопку поиска`, `пример поискового запроса`
 */
const YaSearch = ({ randomSearchTerm }) => {
  return (
    <div>
      <div>
        <img src="" alt="Лого" />
        <input type="text" />
        <button>
          <span>Icon</span>
        </button>
        <button></button>
      </div>
      <p>
        <a href="##">{randomSearchTerm}</a>
      </p>
      <YaKeyboard />
    </div>
  );
};

YaSearch.propTypes = {
  /**
   * Случайный поисковый запрос для примера
   */
  randomSearchTerm: PropTypes.string.isRequired,
};

export default YaSearch;
