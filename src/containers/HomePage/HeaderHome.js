/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import ImageLichSu from "../../assets/images/101157-icon-lich-su.jpg";
import ImageKhamNhaKHoa from "../../assets/images/104635-khamnhakhoa.png";
import ImageKhamTuXa from "../../assets/images/133657-khamtuxa.png";
import DichVuThiNghiem from "../../assets/images/133744-dichvuxetnghiem.png";
import KhamTaiNha from "../../assets/images/133744-khamtainha.png";
import KhamTongQuat from "../../assets/images/133744-khamtongquat.png";
import PhauThuat from "../../assets/images/151930-phau-thuat.jpg";
import SucKhoeTinhThan from "../../assets/images/133744-suckhoetinhthan.png";
import KhamCHuyenKhoa from "../../assets/images/khamchuyenkhoa.png";

import { LANGUAGES } from "../../utils";
import { FormattedMessage } from "react-intl";
import { changeLanguageApp } from "../../store/actions";

var arrPlace = [
  "Tim phong kham",
  " Tim bac si",
  "Tim ly do kham",
  "Tim goi kham",
];
var i = 1;
class HeaderHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: arrPlace[0],
    };
  }
  componentDidMount() {}
  componentDidUpdate() {
    // setInterval(() => {
    //   this.setState({
    //     placeHolder: arrPlace[i],
    //   });
    //   i++;
    //   console.log(this.state.placeHolder);
    // }, 3000);
  }

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    let language = this.props.language;
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center-content">
              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.specialty" />
                  </b>
                </div>
                <span>
                  <FormattedMessage id="home-header.searchdoctor" />
                </span>
              </div>

              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.health-facility" />
                  </b>
                </div>
                <span>
                  <FormattedMessage id="home-header.select-room" />
                </span>
              </div>

              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.doctor" />
                  </b>
                </div>
                <span>
                  <FormattedMessage id="home-header.select-doctor" />
                </span>
              </div>

              <div className="child-center-content">
                <div>
                  <b>
                    <FormattedMessage id="home-header.fee" />
                  </b>
                </div>
                <span>
                  <FormattedMessage id="home-header.check-health" />
                </span>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="far fa-question-circle"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <div
                className={
                  language === LANGUAGES.VI
                    ? "language-vi action"
                    : "language-vi"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                  VI
                </span>
              </div>
              <div
                className={
                  language === LANGUAGES.EN
                    ? "language-en action"
                    : "language-en"
                }
              >
                <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id="banner.title1" />
            </div>
            <div className="title2">
              <FormattedMessage id="banner.title2" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder={this.state.placeHolder} />
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${KhamCHuyenKhoa}`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="banner.ex-Specialized" />
                </div>
              </div>

              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${ImageKhamTuXa}`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="banner.ex-Remote" />
                </div>
              </div>

              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${KhamTongQuat}`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="banner.ex-General" />
                </div>
              </div>

              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${DichVuThiNghiem}`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="banner.Medical_test" />
                </div>
              </div>

              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${SucKhoeTinhThan}`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="banner.Mental_health" />
                </div>
              </div>

              <div className="option-child">
                <div
                  className="icon-child"
                  style={{
                    backgroundImage: `url(${ImageKhamNhaKHoa}`,
                  }}
                ></div>
                <div className="text-child">
                  <FormattedMessage id="banner.ex-Dental" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);
