import styled from "styled-components";

// Main 컴포넌트의 스타일
const MainContent = styled.div`
  padding: 20px;
  flex-grow: 100;
  height: 100%;
`;

// 페이지 제목 스타일
const PageTitle = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// 콘텐츠 그리드 스타일
const ContentGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: start;
  padding: 0 20px;
`;

// 제품 박스 스타일
const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

// 제품 상단 스타일
const ProductTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

// 제품 이름 스타일
const ProductName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

// 제품 가격 스타일
const ProductPrice = styled.div`
  font-size: 20px;
  color: blue;
  font-weight: bold;
`;

// 제품 설명 스타일
const ProductDescription = styled.div`
  font-size: 18px;
  color: #555;
  padding: 18px;
`;

// 제품 하단 스타일
const ProductFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// 카테고리 스타일
const Category = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #eff7ff;
  color: #2664eb;
`;

// 장바구니 담기 버튼 스타일
const AddToCartBtn = styled.button`
  background-color: #2664eb;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

function Main() {
  return (
    <MainContent>
      <PageTitle>
        <h1>추천 제품</h1>
      </PageTitle>
      <ContentGrid>
        {/* 상품 1 */}
        <ProductBox>
          <ProductTop>
            <ProductName>프리미엄 노트북</ProductName>
            <ProductPrice>1,599,000원</ProductPrice>
          </ProductTop>
          <ProductDescription>최신 사양의 고성능 노트북</ProductDescription>
          <ProductFooter>
            <Category>전자기기</Category>
            <AddToCartBtn>장바구니 담기</AddToCartBtn>
          </ProductFooter>
        </ProductBox>

        {/* 상품 2 */}
        <ProductBox>
          <ProductTop>
            <ProductName>무선 헤드폰</ProductName>
            <ProductPrice>299,000원</ProductPrice>
          </ProductTop>
          <ProductDescription>
            프리미엄 사운드의 노이즈 캔슬링 헤드폰
          </ProductDescription>
          <ProductFooter>
            <Category>전자기기</Category>
            <AddToCartBtn>장바구니 담기</AddToCartBtn>
          </ProductFooter>
        </ProductBox>

        {/* 상품 3 */}
        <ProductBox>
          <ProductTop>
            <ProductName>스마트 워치</ProductName>
            <ProductPrice>399,000원</ProductPrice>
          </ProductTop>
          <ProductDescription>
            피트니스 트래킹과 스마트 연결 가능
          </ProductDescription>
          <ProductFooter>
            <Category>액세서리</Category>
            <AddToCartBtn>장바구니 담기</AddToCartBtn>
          </ProductFooter>
        </ProductBox>
      </ContentGrid>
    </MainContent>
  );
}

export default Main;
