import play from "../assets/images/icons/play.svg";

import "./FilmEpisode.css";

function FilmEpisode({ episode }) {
  const { img, alt, title, timeTitle, time, describe } = episode;

  return (
    <li>
      <div className="flex gap-m">
        <div className="film-episode-width">
          <div className="relative">
            <img src={img} alt={alt} />
            <div className="absolute film-episode-play-icon">
              <img src={play} alt="play" />
            </div>
          </div>
        </div>
        <div className="film-episode-width">
          <h4 className="font-bold text-l film-episode-title text-neutral-0 mb-xs">
            {title}
          </h4>
          <p className="font-medium film-episode-time text-neutral-500 mb-0 mb-lg-s">
            {timeTitle && "影片時長："}
            {time}分鐘
          </p>
          <p className="none block-lg text-h5 text-neutral-100">{describe}</p>
        </div>
      </div>
      <p className="none-lg text-s text-neutral-100">{describe}</p>
    </li>
  );
}

export default FilmEpisode;
