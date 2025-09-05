import arrowLeft from "../assets/images/icons/arrow-left.svg"
import btnListMore from "../assets/images/icons/btn-list-more.svg"
import FavListVideoCover1 from "../assets/images/Personal_Page_Fav/FavListVideoCover_1.svg"
import FavListVideoCover2 from "../assets/images/Personal_Page_Fav/FavListVideoCover_2.svg"
import FavListVideoCover3 from "../assets/images/Personal_Page_Fav/FavListVideoCover_3.svg"
import Button from "../ui/Button";

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
        <section>
            <div className="container">
              <ul className="row gap-xs">
                <li className="col-4 flex">
                  <img src={FavListVideoCover1} className="col-2" alt="" />
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
                  <img src={FavListVideoCover2} className="col-2" alt="" />
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
                  <img src={FavListVideoCover3} className="col-2" alt="" />
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
      </main>
    </>
  );
}

export default FavoriteItem;
