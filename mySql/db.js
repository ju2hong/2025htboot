// db.js
const mysql = require("mysql2");

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "ninja", // 데이터베이스 호스트
  user: "ninja", // MySQL 사용자 이름
  password: "1234", // MySQL 비밀번호
  database: "bufl", // 사용할 데이터베이스 이름
});

// 데이터베이스 연결
connection.connect((err) => {
  if (err) {
    console.error("데이터베이스 연결 오류:", err.stack);
    return;
  }
  console.log("데이터베이스에 연결됨");
});
// Users 테이블에 데이터 삽입
const insertUser = (userName, userRegnu, userPhone) => {
  const query =
    "INSERT INTO Users (user_name, user_regnu, user_phone) VALUES (?, ?, ?)";
  connection.query(
    query,
    [userName, userRegnu, userPhone],
    (error, results) => {
      if (error) {
        console.error("데이터 삽입 오류:", error);
      } else {
        console.log("회원 데이터 삽입 성공:", results.insertId);
      }
    }
  );
};

// 예시 데이터 삽입
insertUser("홍길동", "1234567890123", "010-1234-5678");
insertUser("김철수", "9876543210123", "010-9876-5432");
insertUser("이영희", "1112233445567", "010-1111-2222");

// 연결 종료
connection.end();
