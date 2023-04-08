import YaNewsList from "./YaNewsList";
import PropTypes from "prop-types";

/**
 * Компонент новостной панели
 */
const YaNewsPanel = ({ newsTopics }) => {
  const newsTopicsList = newsTopics.map((topic) => {
    const newsList = topic.news.map((el) => {
      return <YaNewsList key={el.id} news={el.news} />;
    });
    return (
      <div key={topic.id}>
        <p>{topic.name}</p>
        {newsList}
      </div>
    );
  });

  return <>{newsTopicsList}</>;
};

YaNewsPanel.propTypes = {
  /**
   * Список тем
   */
  newsTopics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      news: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};

export default YaNewsPanel;
