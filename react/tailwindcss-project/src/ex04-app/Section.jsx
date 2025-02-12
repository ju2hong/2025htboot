import "./movieStyle.css";

function Section() {
  return (
    <div class="container">
      <h1 className="font-bold text-2xl m-3">전체 영화</h1>
      <ul class="tabs">
        <li class="tab" id="t1">
          <a href="#">박스 오피스</a>
        </li>
        <li class="tab" id="t2">
          <a href="#">상영예정작</a>
        </li>
        <li class="tab" id="t2">
          <a href="#">단독</a>
        </li>
        <li class="tab" id="t2">
          <a href="#">필름소사이어티</a>
        </li>
        <li class="tab" id="t2">
          <a href="#">클래식소사이어티</a>
        </li>
      </ul>
      <div id="movie_main" class="center">
        <div class="movie-card">
          <p id="num">1</p>
          <img src="public/movieimg/1.jpg" alt="영화 포스터" class="poster" />
          <div class="overlay">
            <p>
              “연주할 때만 느껴지는 감정이 있거든. 그게 널 만나면 느껴져” 유학
              중이던 피아니스트 유준은 팔목 치료를 위해 한국에 교환 학생으로
              오게 된다. 학교에 처음 간 그날, 신비로운 피아노 선율에 이끌려
              도착한 연습실에서 유준은 정아와 마주치고, 운명처럼 끌린 두 사람은
              시간을 보내며 가까워진다. 하지만, 연락처조차 알려주지 않는
              정아와의 만남은 계속 엇갈리고, 유준의 시선이 늘 자신을 향해 있다고
              생각한 인희의 갑작스러운 고백은 정아에게 큰 상처를 입힌다. 그날
              이후 사라진 정아의 행방을 찾던 유준은 정아의 비밀을 마주하게
              되는데… “너와 나의 시간을 이어 준 연주곡 ‘시크릿’ 그렇게 마법 같은
              사랑은 시작된 거야”
            </p>
          </div>
          <div class="details">
            <h3 class="title">말할 수 없는 비밀</h3>
            <p class="info">예매율 34.8% | 개봉일 2025.01.28</p>
            <button class="like-btn">
              ♡<span>100</span>
            </button>
            <button class="reserve-btn">예매</button>
            <button class="reserve-btn">
              <img
                src="public/movieimg/db_btn.png"
                width="37px"
                height="13px"
              />
            </button>
          </div>
        </div>
        <div class="movie-card">
          <p id="num">2</p>
          <img src="public/movieimg/2.jpg" alt="영화 포스터" class="poster" />
          <div class="overlay">
            <p>
              금지된 곳으로 갈 준비가 되었습니다. ‘유니아’ 수녀(송혜교)는
              ‘희준’(문우진)의 몸에 숨어든 악령이 12형상 중 하나라고 확신한다.
              당장 올 수 없는 구마 사제를 기다리다가 부마자가 희생될 것이 분명한
              상황. 결국 ‘유니아’는 소년을 구하기 위해 ‘서품을 받지 못한 수녀는
              구마를 할 수 없다’는 금기를 깨기로 결심한다. 하지만 담당의는
              ‘희준’을 살릴 수 있는 것은 오직 의학이라 믿는 ‘바오로’
              신부(이진욱). 우연한 기회에 그의 제자 ‘미카엘라’ 수녀(전여빈)의
              비밀을 알아챈 ‘유니아’는 ‘희준’을 병원에서 빼내기 위해 막무가내로
              도움을 요청한다. ‘미카엘라’는 거침없는 ‘유니아’ 에게 반발심을
              느끼지만, 동질감이 느껴지는 ‘희준’을 위해 힘을 보태기로 한다.
              마침내 두 수녀는 수단과 방법을 가리지 않고 오직 소년을 살리기 위한
              위험한 의식을 시작하는데... 원칙은 단 하나, 무조건 살린다!
            </p>
          </div>
          <div class="details">
            <h3 class="title">검은 수녀들</h3>
            <p class="info">예매율 11.8% | 개봉일 2025.01.24</p>
            <button class="like-btn">
              ♡<span>100</span>
            </button>
            <button class="reserve-btn">예매</button>
            <button class="reserve-btn">
              <img
                src="public/movieimg/db_btn.png"
                width="37px"
                height="13px"
              />
            </button>
          </div>
        </div>

        <div class="movie-card">
          <p id="num">3</p>
          <img src="public/movieimg/3.jpg" alt="영화 포스터" class="poster" />
          <div class="overlay">
            <p>
              1908년 함경북도 신아산에서 안중근이 이끄는 독립군들은 일본군과의
              전투에서 큰 승리를 거둔다. 대한의군 참모중장 안중근은 만국공법에
              따라 전쟁포로인 일본인들을 풀어주게 되고, 이 사건으로 인해 독립군
              사이에서는 안중근에 대한 의심과 함께 균열이 일기 시작한다. 1년 후,
              블라디보스토크에는 안중근을 비롯해 우덕순, 김상현, 공부인, 최재형,
              이창섭 등 빼앗긴 나라를 되찾기 위해 마음을 함께하는 이들이 모이게
              된다. 이토 히로부미가 러시아와 협상을 위해 하얼빈으로 향한다는
              소식을 접한 안중근과 독립군들은 하얼빈으로 향하고, 내부에서 새어
              나간 이들의 작전 내용을 입수한 일본군들의 추격이 시작되는데…
              하얼빈을 향한 단 하나의 목표, 늙은 늑대를 처단하라
            </p>
          </div>
          <div class="details">
            <h3 class="title">하얼빈</h3>
            <p class="info">예매율 9.1% | 개봉일 2024.12.24</p>
            <button class="like-btn">
              ♡<span>100</span>
            </button>
            <button class="reserve-btn">예매</button>
            <button class="reserve-btn">
              <img
                src="public/movieimg/db_btn.png"
                width="37px"
                height="13px"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
