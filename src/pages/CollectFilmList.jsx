import collect1 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-1.svg";
import collect2 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-2.svg";
import collect3 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-3.svg";
import collect4 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-4.svg";
import collect5 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-5.svg";
import collect6 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-6.svg";
import collect7 from "../assets/images/Personal_Page_Search_Result/VideoThumbnail-7.svg";

import "./CollectFilmList.css";

function CollectFilmList() {
  const collectFilm = [
    {
      id: 1,
      img: collect1,
      alt: "collect1",
      title: "地球力：傾聽來自荒野的呼喚",
      episode: 8,
      isCollected: false,
    },
    {
      id: 2,
      img: collect2,
      alt: "collect2",
      title: "與牠們的約定：守護瀕危生命的行動詩",
      episode: 8,
      isCollected: false,
    },
    {
      id: 3,
      img: collect3,
      alt: "collect3",
      title: "森林之心：維繫生命的綠色網絡",
      episode: 8,
      isCollected: false,
    },
    {
      id: 4,
      img: collect4,
      alt: "collect4",
      title: "城市與野境的邊界：尋找共存的智慧",
      episode: 8,
      isCollected: false,
    },
    {
      id: 5,
      img: collect5,
      alt: "collect5",
      title: "從一片葉到一片林：種下未來的希望",
      episode: 8,
      isCollected: false,
    },
    {
      id: 6,
      img: collect6,
      alt: "collect6",
      title: "寂靜的守護者：為無法言語的生命發聲",
      episode: 8,
      isCollected: false,
    },
    {
      id: 7,
      img: collect7,
      alt: "collect7",
      title: "海洋的微光：從珊瑚礁到鯨豚的生命故事",
      episode: 8,
      isCollected: false,
    },
  ];

  return (
    <>
      <div className="text-h6 text-info-500 text-center mt-app-header">
        收藏影片清單頁面，開發中，敬請期待😊
      </div>
    </>
  );
}

export default CollectFilmList;
