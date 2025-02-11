import React, { useState } from "react";

function Header() {
  // 각 메뉴 항목에 대한 상태 관리
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const siteHeader = {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    flex: "1 100%",
    justifyContent: "space-between",
    height: "60px",
    lineHeight: "60px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
  };

  const brandLogo = {
    fontSize: "24px",
    color: "#2664eb",
    fontWeight: "bold",
    padding: "0 20px",
    display: "flex",
  };

  const mainNav = {
    display: "flex",
    flexDirection: "row",
  };

  const primaryMenu = {
    display: "flex",
    flexDirection: "row",
  };

  // 각 메뉴 항목별로 submenu를 표시하는 스타일 적용
  const submenu = {
    display: "block", // display: block으로 항상 보이게 설정
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    position: "absolute",
    top: "47px",
    left: "0",
  };

  const listyle = {
    listStyle: "none",
    padding: "0 30px",
    position: "relative",
  };

  // 메뉴 항목별 hover 처리
  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <div style={siteHeader}>
      <div style={brandLogo}>TechStore</div>
      <div style={mainNav}>
        <ul style={primaryMenu}>
          <li
            onMouseEnter={() => handleMouseEnter("products")} // 제품 메뉴 hover
            onMouseLeave={handleMouseLeave}
            style={listyle}
          >
            <a href="#">제품</a>
            {hoveredMenu === "products" && (
              <ul style={submenu}>
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
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("services")} // 서비스 메뉴 hover
            onMouseLeave={handleMouseLeave}
            style={listyle}
          >
            <a href="#">서비스</a>
            {hoveredMenu === "services" && (
              <ul style={submenu}>
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
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter("company")} // 회사소개 메뉴 hover
            onMouseLeave={handleMouseLeave}
            style={listyle}
          >
            <a href="#">회사소개</a>
            {hoveredMenu === "company" && (
              <ul style={submenu}>
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
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
