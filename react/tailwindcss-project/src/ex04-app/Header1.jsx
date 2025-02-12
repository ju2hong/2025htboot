const TopHeader = () => {
  const leftLink = {
    margin: "10px 0",
  };
  const rightLink = {
    margin: "10px 0",
  };

  return (
    <div className="flex justify-between">
      <div style={leftLink}>
        <a href="#" className="m-3">
          VIP LOUNGE
        </a>
        <a href="#" className="m-3">
          멤버십
        </a>
        <a href="#" className="m-3">
          고객센터
        </a>
      </div>
      <div style={rightLink}>
        <a href="#" className="m-3">
          로그인
        </a>
        <a href="#" className="m-3">
          회원가입
        </a>
        <a href="#" className="m-3">
          빠른예매
        </a>
      </div>
    </div>
  );
};

const DownHeader = () => {
  const mainHeader = {};
  return (
    <div style={mainHeader}>
      <div style={icons}>
        <img
          src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-sitemap.png"
          alt=""
        />
        <img
          src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-search.png"
          alt=""
        />
      </div>
      <div style={headerBtn}>
        영화
        <div className="hiddenMenu">
          <ul className="menulist">
            <li className="menuLi">전체영화</li>
          </ul>
        </div>
      </div>

      <div className="headerBtn">
        예매
        <div className="hiddenMenu">
          <ul className="menulist">
            <li className="menuLi">빠른예매</li>
            <li className="menuLi">상영시간표</li>
            <li className="menuLi">더 부티크 프라이빗 예매</li>
          </ul>
        </div>
      </div>
      <div className="headerBtn">
        극장
        <div className="hiddenMenu">
          <ul className="menulist">
            <li className="menuLi">전체극장</li>
            <li className="menuLi">특별관</li>
          </ul>
        </div>
      </div>
      <div className="logo"></div>
      <div className="headerBtn">이벤트</div>
      <div className="headerBtn">스토어</div>
      <div className="headerBtn">혜택</div>
      <div className="icons">
        <img
          src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule.png"
          alt=""
        />
        <img
          src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mymega.png"
          alt=""
        />
      </div>
    </div>
  );
};

function Header() {
  return <TopHeader></TopHeader>;
}
export default Header;
