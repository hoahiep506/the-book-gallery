import {h} from 'preact'
import style from './style.css'

const Header = () => (
  <header class={style.header}>
    <h1 class={style.h1}> The Book Gallery</h1>
    <p class={style.p}> Sharing IELTS &#x000B7; TOEIC books</p>
  </header>
)
export default Header