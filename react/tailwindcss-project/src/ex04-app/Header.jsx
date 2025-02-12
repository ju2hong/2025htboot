import "./movieStyle.css";

function Header() {
  return (
    <div class="header">
      <div class="top_links">
        <div class="left_link">
          <a href="#">VIP LOUNGE</a>
          <a href="#">멤버십</a>
          <a href="#">고객센터</a>
        </div>
        <div class="right_link">
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
          <a href="#">빠른예매</a>
        </div>
      </div>
      <div class="navigation-container">
        <nav id="link_area">
          <a href="#layer_sitemap">
            <img src="public/movieimg/ham.png" />
          </a>
          <a href="#layer_header_search">
            <img src="public/movieimg/search.png" />
          </a>
          <a
            href="https://www.megabox.co.kr/movie"
            className="flex justify-center items-center"
          >
            <img src="public/movieimg/mega_logo.png" alt="logo" />
          </a>
          <a href="#">
            <img src="public/movieimg/month.png" />
          </a>
          <a href="#">
            <img src="public/movieimg/me.png" />
          </a>
        </nav>

        <nav id="gnb">
          <li>
            <a href="#" class="gnb-txt-movie">
              <img src="public/movieimg/gnb-txt-movie.png" />
            </a>
            <div class="gnb-depth2">
              <ul>
                <li>
                  <a href="/movie" title="전체영화">
                    전체영화
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="/booking" class="gnb-txt-reserve">
              <img src="public/movieimg/gnb-txt-reserve.png" />
            </a>
            <div class="gnb-depth2">
              <ul>
                <li>
                  <a href="/booking" title="빠른예매">
                    빠른른예매
                  </a>
                </li>
                <li>
                  <a href="/booking/timetable" title="빠른예매">
                    상영 시간표
                  </a>
                </li>
                <li>
                  <a
                    href="/booking/privatebooking"
                    title="더 부티크 프라이빗 예매"
                  >
                    더 부티크 프라이빗 예매
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="/theater/list" class="gnb-txt-theater" title="극장">
              <img src="public/movieimg/gnb-txt-theater.png" />
            </a>
            <div class="gnb-depth2">
              <ul>
                <li>
                  <a href="/theater/list" title="전체극장">
                    전체 극장
                  </a>
                </li>
                <li>
                  <a href="/theater/list" title="특별관">
                    특별관
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="/event" class="gnb-txt-event" title="이벤트">
              <img src="public/movieimg/gnb-txt-event.png" />
            </a>
            <div class="gnb-depth2">
              <ul>
                <li>
                  <a href="/event" title="진행중 이벤트">
                    진행중 이벤트
                  </a>
                </li>
                <li>
                  <a href="/event/end" title="지난 이벤트">
                    지난 이벤트
                  </a>
                </li>
                <li>
                  <a href="/event/winner/list" title="당첨자 발표">
                    당첨자 발표
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a href="/store" class="gnb-txt-store" title="스토어">
              <img src="public/movieimg/gnb-txt-store.png" />
            </a>
          </li>

          <li>
            <a href="/benefit/membership" class="gnb-txt-benefit" title="혜택">
              <img src="public/movieimg/gnb-txt-benefit.png" />
            </a>
            <div class="gnb-depth2">
              <ul>
                <li>
                  <a href="/benefit/membership" title="메가박스 멤버십">
                    메가박스 멤버십
                  </a>
                </li>
                <li>
                  <a href="/benefit/discount/guide" title="제휴/할인">
                    제휴/할인
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </nav>
      </div>
    </div>
  );
}
export default Header;
