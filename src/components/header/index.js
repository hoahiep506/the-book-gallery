import style from './style.css'
import config from '../../../siteConfig'

const Header = () => (
  <header class={style.header}>
    <h1 class={style.h1}> {config.title} </h1>
    <p class={style.p}> {config.tagLine}</p>
  </header>
)
export default Header