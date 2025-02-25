// 객체타입
let user1 = {
  id: 1,
  name: '홍길동',
}

// 'object'형식에 'id'속성은 없습니다.
user1.id

// 객체 리터럴 타입
let user2: {
  id: number
  name: string
} = {
  id: 1,
  name: '홍길동',
}
user2.id

let user3: {
  // 선택적 프로퍼티를 통햏 속성 생략 가능
  id?: number
  name: string
} = {
  name: '홍길동',
}

let config: {
  // 읽기전용 속성으로 지정
  readonly apiKey: string
} = {
  apiKey: 'MY API KEY',
}
config.apiKey
