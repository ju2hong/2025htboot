-- ch03.sql
-- 내장 함수 : MySQL에서 지원하는 원래의 함수
-- 사용자 정의 함수 : 사용자가 직접 만든 함수
-- 내장 함수
-- 1.단일행 함수
-- 2.집계 함수(여러행 함수)

SELECT CHAR_LENGTH('HELLO') -- 글자 길이
		,LENGTH('HELLO') -- 글자 바이트 수
		,CHAR_LENGTH('한글')
		,LENGTH('한글');  -- utf8 유니코드(한글자 3바이트)
		
-- 문자열 연결
SELECT CONCAT('DREAMS', 'COME', 'TRUE');

-- 구분자를 이용한 문자열 연결
-- With Seperator의 약자
SELECT CONCAT_WS('-', '2024', '03', '19'); 

-- 문자열 일부 가져오기
SELECT LEFT('SQL 완전정복', 3);
SELECT RIGHT('SQL 완전정복', 4);
SELECT SUBSTR('SQL 완전정복', 2, 5); -- 시작인덱스(1부터 시작),개수  
SELECT SUBSTR('SQL 완전정복', 2); -- 인덱스부터 끝까지 

-- 문자열 제거후 가져오기
-- 2번째 구분자 이후를 지우고 가져온다.
SELECT SUBSTRING_INDEX('서울시 동작구 흑석로', ' ', 2); 
-- -2번째 구분자 이전를 지우고 가져온다.
SELECT SUBSTRING_INDEX('서울시 동작구 흑석로', ' ', -2);

-- 자리수 채움 문자
SELECT LPAD('SQL', 10, '#'); -- #######SQL
SELECT RPAD('SQL', 5, '*'); -- SQL**

-- 공백제거
SELECT LENGTH(LTRIM(' SQL '));
SELECT LENGTH(RTRIM(' SQL '));
SELECT LENGTH(TRIM(' SQL '));

SELECT LTRIM(' I LIKE SQL ');
SELECT RTRIM(' I LIKE SQL ');
SELECT TRIM(' I LIKE SQL ');
SELECT REPLACE (' I LIKE SQL ', ' ', ''); -- 모든 공백제거

-- 특정문자 제거(TRIM)
SELECT TRIM(BOTH '###' FROM '###SQL###');
SELECT TRIM(BOTH '#' FROM '###SQL###');
SELECT TRIM(BOTH '##' FROM '###SQL###');

SELECT TRIM(BOTH 'abc' FROM 'abcSQLLababc');
SELECT TRIM(LEADING  'abc' FROM 'abcSQLLababc');
SELECT TRIM(TRAILING  'abc' FROM 'abcSQLLababc');

-- 문자열 선택
SELECT FIELD('JAVA', 'SQL', 'JAVA', 'C'); -- 인덱스 2를 반환
SELECT FIND_IN_SET('JAVA', 'SQL,JAVA,C'); -- 인덱스 2를 반환
SELECT INSTR('네 인생을 살아라', '인생'); -- 인덱스 3을 반환 
SELECT LOCATE('인생', '네 인생을 살아라'); -- 인덱스 3을 반환
SELECT ELT(2, 'SQL', 'JAVA', 'C'); -- 인덱스 2인 'JAVA'을 반환

-- 문자열 중복
SELECT REPEAT('*', 5);
SELECT CONCAT(  REPEAT('*', 5), 'star'); -- *****star

-- 문자열 치환
SELECT REPLACE('010.123.4567', '.', '-');

-- 문자열 거꾸로
SELECT REVERSE('OLLEH');

-- 소수점 관련 함수들
SELECT CEILING(123.56); -- 소수점 첫째자리에서 올림
SELECT FLOOR(123.56); -- 소수점 첫째자리에서 버림
SELECT ROUND(123.56); -- 소수점 첫째자리에서 반올림
SELECT ROUND(123.56, 1); -- 소수점 둘째자리에서 반올림
SELECT ROUND(123.567, 2); -- 소수점 셋째자리에서 반올림
SELECT ROUND(3456.1234, -1); -- 일의 자리에서 반올림
SELECT ROUND(3456.1234, -2); -- 십의 자리에서 반올림
SELECT TRUNCATE(3456.1234, 1); -- 소수점 둘째자리에서 버림
SELECT TRUNCATE(3456.1234, 2); -- 소수점 세째자리에서 버림
SELECT TRUNCATE(3456.1234, -1); -- 일의 자리에서 버림
SELECT TRUNCATE(3456.1234, -2); -- 십의 자리에서 버림

-- 절대값
SELECT ABS( -120 );
SELECT ABS( 120 );
-- 부호
SELECT SIGN(-120 ); -- -1로 반환
SELECT SIGN( 120 ); -- 1로 반환
-- 나누기 함수
SELECT MOD( 203, 4 );
SELECT 203 % 4;
SELECT 203 MOD 4;
-- 제곱승
SELECT POWER(2, 3); -- 2의 3승
-- 제곱근
SELECT SQRT( 16 ); -- 16의 제곱근 
-- 랜덤값
SELECT RAND();  -- JAVA의 MATH.random()와 유사함. 0.0 ~ 0.999999...
SELECT RAND( 100 ); -- 100을 시드로 주어서 랜덤값 발생(특정값으로 고정)
SELECT ROUND( RAND() * 100 ); -- 0.0~0.999 * 100 => 99.5~9.99=> 0~100
SELECT FLOOR( RAND() * 100 ) + 1; -- 1~100

-- 현재 날짜시간 가져오기
SELECT now(),SYSDATE() ;
-- 현재 날짜 가져오기
SELECT CURDATE();
-- 현재 시간 가져오기
SELECT CURTIME(); 

-- 날짜 간격 구하기
SELECT now()
		,DATEDIFF('2025-12-25', now()) -- 640
	    ,DATEDIFF(now(), '2025-12-25'); -- -640
SELECT	now()
		,TIMESTAMPDIFF(YEAR, now(), '2025-12-20')
		,TIMESTAMPDIFF(MONTH, now(), '2025-12-20')
	    ,TIMESTAMPDIFF(DAY, now(), '2025-12-20'); -- 639
SELECT now()
		,DATEDIFF('2025-5-5 10:00', now() ) -- 자정 기준
        ,TIMESTAMPDIFF(DAY, now(), '2025-5-5 10:00'); -- 만24시간까지 고려

SELECT now()
		,ADDDATE(now(), 50) -- 50일후
		,ADDDATE(now(), INTERVAL 50 DAY) -- 50일후
		,ADDDATE(now(), INTERVAL 50 MONTH) -- 50달후
		,SUBDATE(now(), INTERVAL 50 HOUR); -- 50시간전

SELECT now()
		,LAST_DAY(now()) -- 이번달의 마지날 일
		,DAYOFYEAR(now()) -- 올해의 지난 날(80일째)
		,MONTHNAME(now()) -- 이번달의 이름(영문)
		,WEEKDAY(now());  -- 월(0)~일(6)   오늘 수(2)