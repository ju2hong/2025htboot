// 타입별칭
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  location: string
  phone: string
}
let user1: User = {
  id: 1,
  name: '홍길동',
  nickname: 'hong',
  birth: '2000.01.01',
  location: '한양',
  phone: '010-1111-1111',
}
let user2: User = {
  id: 2,
  name: '사임당',
  nickname: 'dang',
  birth: '2000.01.01',
  location: '한양',
  phone: '010-1111-2222',
}

// 객체 리터럴
type CountryCodes = {
  Korea: string
  UnitedState: string
  UnitedKingdom: string
}
let countryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
  // 200개라면?
}
// 인덱스 시그니처
type CountryCodes2 = {
  [key: string]: string
}
let countryCodes2: CountryCodes2 = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}
type CountryCodes3 = {
  [key: string]: string
  Korea: 'ko' //korea는 꼭 있어야 됨.
}
let countryCodes3: CountryCodes3 = {
  Korea: 'ko', //꼭 있어야 됨.
}
