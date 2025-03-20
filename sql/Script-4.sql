USE 세계무역;

-- 집합연산자 UNION,UNION ALL
-- UNION : 두 개의 SELECT 결과를 합쳐줌.
-- 		 : 컬럼의 갯수와 타입을 일치 시켜야 됨.
-- UNION ALL : 중복되는 레코드도 다 출력해줌 .
SELECT 고객번호
	   ,담당자명
	   ,마일리지
	   ,도시
FROM 고객
WHERE 도시 = '부산광역시'
UNION
SELECT 고객번호
	   ,담당자명
	   ,마일리지
	   ,도시
FROM 고객
WHERE 마일리지 < 1000
ORDER BY 고객번호;
-- OR 연산자
SELECT 고객번호
	   ,담당자명
	   ,마일리지
	   ,도시
FROM 고객
WHERE 도시 = '부산광역시'
OR 마일리지 < 1000
ORDER BY 1;

UPDATE 고객
SET 지역 = NULL
WHERE 지역 = '';

SELECT * FROM 고객
WHERE 지역 IS NULL;

SELECT * FROM 고객
WHERE 지역 IS NOT NULL;

-- IN: ~ W중에 하나가 있으면 TRUE ( 여러개의 OR 를 대체 )
SELECT 고객번호 
	   ,담당자명
	   ,담당자직위
FROM 고객
WHERE 담당자직위 IN ('영업 과장','마케팅 과장')
-- BETWEEN AND : ~이상 ~이하 범위를 지정할 때 ( 비교,AND를 대체 )
SELECT 담당자명
	   ,마일리지
FROM 고객
WHERE 마일리지 BETWEEN 100000 AND 200000
-- LIKE 연산자
SELECT *
FROM 고객
WHERE 도시 LIKE '%광역시'
AND (고객번호 LIKE '_C%'OR 고객번호 LIKE '__C%');


-- 실전문제
-- 1. 제품 테이블에서 세계무역이 취급하는 제품 중에서 '주스' 제품에 대한 모든 정보를 검색하시오.
SELECT * 
FROM 제품
WHERE 제품명 LIKE '%주스%';
-- 2. 제품 테이블에서 단가가 5,000원 이상 10,000원 이하인 '주스'제품에는 무엇이 있는지 검색하시오.
SELECT * 
FROM 제품
WHERE 제품명 LIKE '%주스%'
AND 단가 BETWEEN 5000 AND 10000;
-- 3. 제품 테이블에서 제품번호가 1,2,4,7,11,20인 제품의 모든 정보를 보이시오.
SELECT *
FROM 제품
WHERE 제품번호 IN (1,2,4,7,11,20);
-- 4. 제품 테이블에서 재고금액이 높은 상위 10개 제품에 대해 제품번호, 제품명, 
-- 단가, 재고, 재고금액(단가 * 재고)을 보이시오.
SELECT 제품번호,제품명,단가,재고,(단가*재고) AS 재고금액
FROM 제품
ORDER BY 재고금액 DESC
LIMIT 10;

