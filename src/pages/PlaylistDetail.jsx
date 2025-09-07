// src/pages/PlaylistDetail.jsx
import { useParams, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import Button from "../ui/Button";
import arrowLeft from "../assets/images/icons/arrow-left.svg";

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
          {/* 頁面標題 */}
          <div className="flex items-center mb-l">
            <Button otherClass="flex items-center mr-s" onClick={() => navigate('/app/account/favorite')}>
              <img src={arrowLeft} alt="arrow left"/>
            </Button>
            <h1 className="text-h6 text-neutral-100">{decodedName}</h1>
          </div>

          {isNew && (
            <div className="text-center py-xl mb-l">
              <div className="bg-success-500 text-white p-4 rounded-lg mb-4">
                <h2 className="text-lg font-bold mb-2">播放清單建立成功！</h2>
                <p className="text-sm">「{decodedName}」已建立完成</p>
              </div>
              <p className="text-neutral-400">開始添加你喜歡的影片吧！</p>
            </div>
          )}

          {videos.length === 0 ? (
            <div className="text-center py-xl">
              <div className="bg-neutral-800 rounded-lg p-8">
                <p className="text-neutral-400 mb-4">這個播放清單還沒有影片</p>
                <Button otherClass="bg-success-500 text-white px-6 py-3 rounded-full">
                  瀏覽影片
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              {videos.map((video, index) => (
                <div key={index} className="bg-neutral-800 p-4 rounded-lg">
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default PlaylistDetail;