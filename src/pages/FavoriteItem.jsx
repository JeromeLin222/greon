import arrowLeft from "../assets/images/icons/arrow-left.svg"
import btnListMore from "../assets/images/icons/btn-list-more.svg"
import btnAdd from "../assets/images/icons/add-btn.svg"
import playList from "../assets/images/icons/play-list.svg" 
import goldenCrown from "../assets/images/icons/crown-golden.svg"

import FavListVideoCover1 from "../assets/images/Personal_Page_Fav/FavListVideoCover_1.svg"
import FavListVideoCover2 from "../assets/images/Personal_Page_Fav/FavListVideoCover_2.svg"
import FavListVideoCover3 from "../assets/images/Personal_Page_Fav/FavListVideoCover_3.svg"

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import "./FavoriteItem.css";

import { useState } from "react";


// 在同一個檔案中或另外創建
function CreatePlaylistForm({ onCloseModal }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false)

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };


  return (
    <div className="p-6 text-neutral-100">
      <h2 className="text-h6 text-neutral-100 mb-xl">建立新播放清單</h2>
      <div className="input-container">
        <input 
          type="text" 
          placeholder=" " 
          className="input-field" 
          id="playlist-title"
          onFocus = {handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          />
        <label htmlFor="playlist-title" className="input-label" >
          {(isFocused || hasValue) ? '標題' : '請輸入標題'}
        </label>
      </div>



      <button 
          type="button" 
          onClick={onCloseModal}
          className="flex-1 bg-neutral-600 text-white py-3 rounded-full font-bold"
        ></button>
    </div>
  );
}


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
        <Modal>
          <Modal.Open opens="create-playlist">
            <Button otherClass="col-4">
              <div className="create-play-list py-xl flex items-center justify-center relative">
                <div className="vip-tag bg-success-200 py-xs px-s absolute flex items-center">
                  <img src={goldenCrown} alt="golden crown icon" className="mr-xxs"/>
                  <span className="font-bold text-s text-neutral-100">VIP</span>
                </div>
                <img src={btnAdd} alt="add button" className="add-button-icon mr-m"/>
                <p className="text-neutral-100 text-h6 font-bold"> 建立新播放清單</p>
              </div>
            </Button>
          </Modal.Open>
          <Modal.Window styledModalCustomClass="custom-dark-modal" name="create-playlist">
            <CreatePlaylistForm></CreatePlaylistForm>
          </Modal.Window>
        </Modal>

        </section>
      </main>
    </>
  );
}

export default FavoriteItem;
