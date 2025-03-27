'use client'
import { useRouter } from 'next/navigation'
import style from './style.module.css'

export default function Button() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return (
    <button className={style.button} onClick={handleClick}>
      홈으로
    </button>
  )
}
