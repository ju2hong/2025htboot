
-- 연습문제
-- 1. '배재용' 사원의 부서명을 보이시오.
-- 서브쿼리 또는 조인 방법으로 해결하시오.
SELECT 부서명
FROM 부서
WHERE 부서번호 = (SELECT 부서번호
                FROM 사원
                WHERE 이름 = '배재용'
                );
               
SELECT 사원.이름, 부서명
FROM 부서
INNER JOIN 사원
ON 부서.부서번호 = 사원.부서번호
WHERE 이름 = '배재용';

-- 2. 한번도 주문한 적이 없는 제품의 정보를 보이시오.
-- 서브쿼리 또는 조인 방법으로 해결하시오.
SELECT *
FROM 제품 AS p
WHERE NOT EXISTS (
                  SELECT *
                  FROM 주문세부 AS d
                  WHERE d.제품번호 = p.제품번호
				  );

SELECT 제품.*
FROM 제품
LEFT OUTER JOIN 주문세부
ON 제품.제품번호 = 주문세부.제품번호
WHERE 주문세부.제품번호 IS NULL;

-- 3. 담당자명, 고객회사명, 주문건수, 최초주문일과 최종주문일을 보이시오.
SELECT 담당자명
	  ,고객회사명
      ,주문건수
      ,최초주문일
      ,최종주문일
FROM 고객
    ,(SELECT 고객번호
            ,COUNT(*) AS 주문건수
            ,MIN(주문일) AS 최초주문일
            ,MAX(주문일) AS 최종주문일
     FROM 주문 
     GROUP BY 고객번호
     ) AS 주문요약
WHERE 고객.고객번호 = 주문요약.고객번호;

-- 실전문제

-- 1. 제품 테이블에 있는 제품 중 단가가 가장 높은 제품명은 무엇인가?
SELECT 제품명, 단가
FROM 제품 
WHERE 단가 = (SELECT MAX(단가) FROM 제품);

-- 2. 제품 테이블에 있는 제품 중 단가가 가장 높은 제품의 주문수량합은 얼마인가?
SELECT 제품명, SUM(주문세부.주문수량) AS 주문수량합
FROM 제품
INNER JOIN 주문세부
ON 제품.제품번호 = 주문세부.제품번호
WHERE 제품.단가 = (SELECT MAX(단가) FROM 제품)
GROUP BY 제품명;

-- 3. '아이스크림' 제품의 주문수량합은 얼마인가?
SELECT sum(주문수량) AS 주문수량합 
FROM 주문세부
WHERE 주문세부.제품번호 IN 
	(SELECT 제품번호 FROM 제품
		WHERE 제품명 LIKE "%아이스크림%");

-- 4. '서울특별시' 고객들에 대한 주문년도별 주문건수를 보이시오.
SELECT YEAR(주문일) AS 주문년도, COUNT(*) AS 주문건수 
FROM 주문
WHERE 고객번호 IN (SELECT 고객번호 FROM 고객
					WHERE 도시 = "서울특별시")
GROUP BY 주문년도
WITH ROLLUP;