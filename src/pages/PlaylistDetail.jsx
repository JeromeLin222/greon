// src/pages/PlaylistDetail.jsx
import { useParams, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import Button from "../ui/Button";
import arrowLeft from "../assets/images/icons/arrow-left.svg";
import PlaylistDefaultCover from "../assets/images/Personal_Page_Fav_Cover/FavListVideoCover_2.svg"
import playList from "../assets/images/icons/play-list.svg" 
import addIcon from "../assets/images/icons/add-white.svg"
import editIcon from "../assets/images/icons/edit.svg"

import "./PlaylistDetail.css";


function PlaylistDetail() {
  const { playlistName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isNew = location.state?.isNew;
  
  const [videos] = useState([]); // 暫時空的影片列表

  const decodedName = decodeURIComponent(playlistName);

  return (
    <>
      <main className="mt-app-header">
        <div className="container">
					<Button otherClass="flex items-center mr-s" onClick={() => navigate('/app/account/favorite')}>
						<img src={arrowLeft} alt="arrow left"/>
					</Button>
					<div className="relative">
						<img src={PlaylistDefaultCover} className="relative" alt="" />
						<div className="tag p-xxs absolute flex items-center bg-neutral-900">
							<img src={playList} alt="play list icon" style={{ width: '1rem', height: '1rem'}}/>
							<span className="text-neutral-100 text-xs font-bold">0部影片</span>
						</div>
					</div>
					<h1 className="text-h6 text-neutral-100 mb-s">{decodedName}</h1>
					<div className="flex justify-end mb-xl">
						<a href="#" className="mr-s">
							<img src={addIcon} alt="add icon" />
						</a>
						<a href="#" className="">
							<img src={editIcon} alt="add icon" />
						</a>
					</div>
					<div className="text-center">
						<Button btnStyle="primary" otherClass="btn-custom-padding mb-3xl">
							<span className="font-bold">新增影片至清單</span>
						</Button>
						<p className="text-neutral-0 text-xl">目前尚無影片</p>
					</div>
        </div>
      </main>
    </>
  );
}

export default PlaylistDetail;