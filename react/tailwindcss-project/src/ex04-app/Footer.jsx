import "./movieStyle.css";

function Footer() {
  return (
    <div id="footer">
      <div class="footer-top">
        <ul class="fnb">
          <a href="#">회사소개</a>
          <a href="#">인사채용</a>
          <a href="#">사회공헌</a>
          <a href="#">제휴/광고/부대사업문의</a>
          <a href="#">이용약관</a>
          <a href="#">위치기반서비스 이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">윤리경영</a>
        </ul>
      </div>
      <div class="footer-bottom">
        <div class="inner-wrap">
          <div class="ci">
            <img src="public/movieimg/logo2.png" alt="Logo" />
          </div>
          <div class="footer-info">
            <address>
              서울특별시 강남구 테헤란로 87길 22 도심공항터미널 건물 408호
            </address>
            <span>
              ARS 1544-0070 대표이메일 m.dreamcenter@partner.megabox.co.kr
            </span>
            <span>· 대표자명 홍정인, 남용석</span>
            <span>· 개인정보보호책임자 강병철</span>
            <span>· 사업자등록번호 211-86-59478</span>
            <span>· 통신판매업신고번호 2023-서울성동-0177</span>
            <span>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
