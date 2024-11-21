import PlayStoreIcon from "../assets/images/playStore.png";
import AppleStoreIcon from "../assets/images/appStore.svg";
import CGAPPBanner from "../assets/images/gospelBanner.png";
import "./styles/Index.css";
import PublicNavigation from "../components/PublicNavigation";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>CGospel - Home</title>
      </Helmet>
      <PublicNavigation />
      <div className="banner cent">
        <div className="banner__item row">
          <div className="banner__item__text col cent">
            <div>
              <div className="banner__header__container">
                <h1 className="banner__header">
                  Prayer <br /> Of the Day
                </h1>
              </div>
              <p className="banner__description">
                I pray that they may all be one. Father! May they be in us, just
                as you are in me and I am in you. May they be one, so that the
                world will believe that you sent me. (John 11:21)
              </p>
              <div className="store__container row">
                <Link to="https://play.google.com/store/apps/details?id=com.xorblin.cgapp">
                  <img
                    className="store__icon"
                    src={PlayStoreIcon}
                    alt="Play Store Icon"
                  />
                </Link>
                <Link to="">
                  <img
                    className="store__icon"
                    src={AppleStoreIcon}
                    alt="App Store Icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="banner__item__app__preview cent">
            <img src={CGAPPBanner} alt="CG App Preview" />
          </div>
        </div>
      </div>
    </>
  );
}
