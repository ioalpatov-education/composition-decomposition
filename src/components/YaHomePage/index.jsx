import YaNewsPanel from "./YaNewsPanel";
import YaInfoCard from "./YaInfoCard";
import YaNavbar from "./YaNavbar";
import YaSearch from "./YaSearch";
import YaTradingPanel from "./YaTradingPanel";
import YaAdvertisingBanner from "./YaAdvertisingBanner";

const dataForInfoCards = [];
const advertising = {};
const randomSearchTerm = "";
const newsTopics = [];
const courses = [];
const dataForHeaderInfoCard = {};
/**
 * Начальная страница поиска Яндекс
 */
const YaHomePage = () => {
  const infoCards = dataForInfoCards.map((info) => {
    const { title, content, id } = info;
    return (
      <YaInfoCard key={id} title={title}>
        {content}
      </YaInfoCard>
    );
  });

  return (
    <div className="ya-home-page">
      <header>
        <div>
          <YaNewsPanel newsTopics={newsTopics} />
          <YaTradingPanel courses={courses} />
        </div>
        <YaInfoCard
          title={dataForHeaderInfoCard.title}
          imgSrc={dataForHeaderInfoCard.img}
          imgAlt={dataForHeaderInfoCard.alt}
        >
          {dataForHeaderInfoCard.content}
        </YaInfoCard>
      </header>
      <YaNavbar />
      <YaSearch randomSearchTerm={randomSearchTerm} />
      <YaAdvertisingBanner
        link={advertising.link}
        bannerImg={advertising.img}
        altText={advertising.alt}
      />
      <div>{infoCards}</div>
    </div>
  );
};

export default YaHomePage;
