import arrowLeft from "../assets/images/icons/arrow-left.svg";
import progressBar from "../assets/images/icons/progress-bar.svg";
import playing from "../assets/images/icons/playing.svg";
import infoPageTop from "../assets/images/Info_Page/info_Page_Top.svg";
import likeGreen from "../assets/images/icons/like-green.svg";
import like from "../assets/images/icons/like.svg";
import share from "../assets/images/icons/share.svg";
import plusList from "../assets/images/icons/plus-list.svg";
import arrowDown from "../assets/images/icons/arrow-down.svg";
import episode1 from "../assets/images/Info_Page/Info_Page_Episode_1.svg";
import episode2 from "../assets/images/Info_Page/Info_Page_Episode_2.svg";
import episode3 from "../assets/images/Info_Page/Info_Page_Episode_3.svg";
import episode4 from "../assets/images/Info_Page/Info_Page_Episode_4.svg";

import Tag from "../ui/Tag";
import Button from "../ui/Button";
import FilmEpisode from "../components/FilmEpisode";
import EndLine from "../components/EndLine";

import "./Film.css";

const filmSeriesEpisode = [
  {
    id: 1,
    img: episode1,
    alt: "episode1",
    title: "1.無腿無礙",
    timeTitle: true,
    time: 29,
    describe:
      "節目史上首位雙腿截肢的求生者，攜手退役軍人闖進貝里斯密林，力拼撐過21天極限挑戰。",
  },
  {
    id: 2,
    img: episode2,
    alt: "episode2",
    title: "2.縫了17針",
    timeTitle: false,
    time: 24,
    describe: "一名負傷上陣的冒險者與一名謹慎的新婚者要在菲律賓求生21天。",
  },
  {
    id: 3,
    img: episode3,
    alt: "episode3",
    title: "3.蛇之海灣",
    timeTitle: false,
    time: 30,
    describe:
      "一位怕蛇怕到要命的退伍軍人和他的搭檔在致命的菲律賓叢林中試圖撐過21天。",
  },
  {
    id: 4,
    img: episode4,
    alt: "episode4",
    title: "4.美女與莽漢",
    timeTitle: true,
    time: 29,
    describe:
      "一名單身漢與剛離婚的女子，在菲律賓偏遠島嶼上展開為期14天的觀眾挑戰，可是最難應付的竟是彼此。",
  },
];

function Film() {
  return (
    <div>
      <div className="relative">
        <img src={infoPageTop} alt="info-page-top" />
        <p className="absolute film-play-time font-bold text-xxs text-md-m text-lg-xl text-neutral-100">
          8:00 / <span className="film-total-time-text">00:29:14</span>
        </p>
        <img
          src={arrowLeft}
          alt="arrow-left"
          className="absolute film-arrow-left"
        />
        <img
          src={progressBar}
          alt="progress-bar"
          className="absolute film-progress-bar"
        />
        <img
          src={playing}
          alt="playing"
          className="absolute film-playing-icon"
        />
      </div>
      <div className="m-m">
        <h1 className="font-bold text-neutral-0 film-title mb-s">
          原始生活21天
        </h1>
        <div className="flex justify-between items-center mb-s">
          <div className="flex gap-xs">
            <Tag
              backgroundColor="#2E7D32"
              textColor="#F5F5F5"
              customClass="py-xxs py-lg-xs px-xs px-s flex items-center justify-center border-radius-1000"
            >
              影集
            </Tag>
            <Tag
              backgroundColor="#2E7D32"
              textColor="#F5F5F5"
              customClass="py-xxs py-lg-xs px-xs px-s flex items-center justify-center border-radius-1000"
            >
              新集數
            </Tag>
            <Tag
              textColor="#44A40C"
              customClass="py-xxs py-lg-xs px-xs px-s flex items-center justify-center border-radius-1000 film-tag-border"
            >
              VIP
            </Tag>
          </div>
          <div className="flex items-center">
            <img
              src={likeGreen}
              alt="like"
              className="mr-xxs like-green-icon"
            />
            <span className="text-primary-400 font-bold text-s text-lg-m">
              4K
            </span>
          </div>
        </div>
        <div className="mb-s">
          <p className="text-m text-lg-xl text-neutral-100">
            《原始生活21天》將「適者生存」這句話提升到全新境界。每一週都有一識的男女身...
            <span className="text-xs text-lg-l text-neutral-500">
              顯示完整內容
            </span>
          </p>
        </div>
        <ul className="flex justify-center justify-lg-start items-center gap-m">
          <li>
            <img src={like} alt="like" className="like-icon" />
          </li>
          <li>
            <img src={share} alt="share" className="share-icon" />
          </li>
          <li>
            <img src={plusList} alt="plus-list" className="plus-list-icon" />
          </li>
        </ul>
      </div>
      <ul className="w-full flex mb-m">
        <li className="film-tab-width text-center film-tab-active-border-bottom">
          <Button otherClass="py-m font-bold text-s text-lg-xl text-primary-400">
            影集
          </Button>
        </li>
        <li className="film-tab-width text-center film-tab-border-bottom">
          <Button otherClass="py-m font-bold text-s text-lg-xl text-neutral-200">
            精選時刻
          </Button>
        </li>
        <li className="film-tab-width text-center film-tab-border-bottom">
          <Button otherClass="py-m font-bold text-s text-lg-xl text-neutral-200">
            推薦
          </Button>
        </li>
      </ul>
      <div className="m-m">
        <div className="flex justify-between items-center series-gap series-padding series-border bg-neutral-800 text-neutral-0 w-fit-content">
          <p>第一季</p>
          <img src={arrowDown} alt="arrow-down" className="arrow-down-icon" />
        </div>
      </div>

      <ul className="flex flex-col gap-m mt-m mr-m ml-m mb-4xl">
        {filmSeriesEpisode.map((episode) => (
          <FilmEpisode key={episode.id} episode={episode} />
        ))}
      </ul>

      <EndLine />
    </div>
  );
}

export default Film;
