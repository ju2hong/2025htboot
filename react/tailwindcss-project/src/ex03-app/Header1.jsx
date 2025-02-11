function Main1() {
  const SiteHeader = style.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    flex: 1 100%;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  `;
  return (
    <SiteHeader>
      <div className="flex font-bold text-blue-700 p-[0 20px]">TechStore</div>
      <div class="main-nav">
        <ul class="primary-menu">
          <li>
            <a href="#">제품</a>
            <ul class="submenu">
              <li>
                <a href="#">전자기기</a>
              </li>
              <li>
                <a href="#">의류</a>
              </li>
              <li>
                <a href="#">도서</a>
              </li>
              <li>
                <a href="#">액세사리</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">서비스</a>
            <ul class="submenu">
              <li>
                <a href="#">컨설팅</a>
              </li>
              <li>
                <a href="#">교육</a>
              </li>
              <li>
                <a href="#">고객지원</a>
              </li>
              <li>
                <a href="#">유지보수</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">회사소개</a>
            <ul class="submenu">
              <li>
                <a href="#">회사정보</a>
              </li>
              <li>
                <a href="#">팀 소개</a>
              </li>
              <li>
                <a href="#">채용정보</a>
              </li>
              <li>
                <a href="#">연락처</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </SiteHeader>
  );
}
export default Main1;
