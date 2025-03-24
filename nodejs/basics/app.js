let express = require('express')
let app = express()
let mysql = require('mysql')
const cors = require('cors')

// 모듈 설치
// npm i nodemon express mysql
// npm i cors ejs

// CORS 허용
app.use(
  cors({
    origin: '*', // 모든 출처 허용 옵션. true를 써도 된다.
  })
)

const port = process.env.PORT || 5000

// 뷰엔진 설정하기
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MySQL 데이터베이스 연결
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
  database: 'blog',
})

conn.connect()

// 📌 1. 게시글 목록 조회
app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json(results)
  })
})

// 📌 2. 특정 게시글 조회
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id
  conn.query('SELECT * FROM posts WHERE id = ?', [postId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.json(results[0])
  })
})

// 📌 3. 새 게시글 작성
app.post('/posts', (req, res) => {
  const { title, content } = req.body
  const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)'
  conn.query(sql, [title, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.status(201).json({
      id: result.insertId,
      title: title,
      content: content,
    })
  })
})

// 📌 4. 게시글 수정
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id
  const { title, content } = req.body
  const sql = 'UPDATE posts SET title = ?, content = ? WHERE id = ?'
  conn.query(sql, [title, content, postId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.json({ id: postId, title, content })
  })
})

// 📌 5. 게시글 삭제
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id
  const sql = 'DELETE FROM posts WHERE id = ?'
  conn.query(sql, [postId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.json({ message: 'Post deleted' })
  })
})

// 📌 6. 댓글 추가 (가정: `comments` 테이블이 있다면)
app.post('/posts/:id/comments', (req, res) => {
  const postId = req.params.id
  const { content } = req.body
  const sql = 'INSERT INTO comments (post_id, content) VALUES (?, ?)'
  conn.query(sql, [postId, content], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({
      post_id: postId,
      comment_id: result.insertId,
      content: content,
    })
  })
})
// 댓글 목록 조회 (GET 요청)
app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id

  // 해당 포스트의 댓글을 모두 조회
  const sql = 'SELECT * FROM comments WHERE post_id = ?'
  conn.query(sql, [postId], (err, comments) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    res.json({ post_id: postId, comments })
  })
})

// 서버 실행
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
