import arrowLeft from "../assets/images/icons/arrow-left.svg"
import btnListMore from "../assets/images/icons/btn-list-more.svg"
import btnAdd from "../assets/images/icons/add-btn.svg"
import playList from "../assets/images/icons/play-list.svg" 

import FavListVideoCover1 from "../assets/images/Personal_Page_Fav/FavListVideoCover_1.svg"
import FavListVideoCover2 from "../assets/images/Personal_Page_Fav/FavListVideoCover_2.svg"
import FavListVideoCover3 from "../assets/images/Personal_Page_Fav/FavListVideoCover_3.svg"

import Tag from "../ui/Tag";
import Button from "../ui/Button";
import "./FavoriteItem.css";


function FavoriteItem() {
  return (
    <>
      <main className="mt-app-header">
          <div className="container"> 
            <div className="flex items-center mb-l">
              <Button otherClass="flex items-center mr-s" to="/app/home">
                <img src={arrowLeft} alt="arrow left"/>
              </Button>
              <h1 className="text-h6 text-neutral-100">收藏片單</h1>
            </div>
          </div>
        <section className="mb-m">
            <div className="container">
              <ul className="row gap-xs">
                <li className="col-4 flex">
                  <div className="col-2">
                    <div className="relative">
                      <img src={FavListVideoCover3} alt="favorite list image" />
                      <div className="tag p-xxs absolute flex items-center bg-neutral-900">
                        <img src={playList} alt="play list icon" style={{ width: '1rem', height: '1rem'}}/>
                        <span className="text-neutral-100 text-xs font-bold">1部影片</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 text-neutral-100">
                    <div className="flex justify-between items-center mb-xs">
                      <h2 className="text-md-xl text-l font-bold">電影</h2>
                      <Button>
                        <img src={btnListMore} alt="more" />
                      </Button>
                    </div>
                    <p className="text-xs text-md-s">看完整清單</p>
                  </div>
                </li>
                <li className="col-4 flex">
                 <div className="col-2">
                    <div className="relative">
                      <img src={FavListVideoCover2} alt="favorite list image" />
                      <div className="tag p-xxs absolute flex items-center bg-neutral-900">
                        <img src={playList} alt="play list icon" style={{ width: '1rem', height: '1rem'}}/>
                        <span className="text-neutral-100 text-xs font-bold">1部影片</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 text-neutral-100">
                  <div className="flex justify-between items-center mb-xs">
                      <h2 className="text-md-xl text-l font-bold">紀錄片</h2>
                      <Button>
                        <img src={btnListMore} alt="more" />
                      </Button>
                    </div>
                    <p className="text-xs text-md-s">看完整清單</p>
                  </div>
                </li>
                <li className="col-4 flex">
                  <div className="col-2">
                    <div className="relative">
                      <img src={FavListVideoCover1} alt="favorite list image" />
                      <div className="tag p-xxs absolute flex items-center bg-neutral-900">
                        <img src={playList} alt="play list icon" style={{ width: '1rem', height: '1rem'}}/>
                        <span className="text-neutral-100 text-xs font-bold">1部影片</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 text-neutral-100">
                  <div className="flex justify-between items-center mb-xs">
                      <h2 className="text-md-xl text-l font-bold">動漫</h2>
                      <Button>
                        <img src={btnListMore} alt="more" />
                      </Button>
                    </div>
                    <p className="text-xs text-md-s">看完整清單</p>
                  </div>
                </li>

              </ul>
            </div>
        </section>
        <section className="container">
          <Button otherClass="col-4">
            <div className="create-play-list py-xl flex items-center justify-center">
              <img src={btnAdd} alt="add button" className="add-button-icon mr-m"/>
              <p className="text-neutral-100 text-h6 font-bold"> 建立新播放清單</p>
            </div>
          </Button>
        </section>
      </main>
    </>
  );
}

export default FavoriteItem;
