import style from './style.css'
import config from '../../../siteConfig'



const Footer = () => (
  <footer class={style.footer}>
    <p>
      {config.copyright}
      <a href='https://thichtienganh.com/' target='_blank' rel='noreferrer'>
        {config.shortName}
      </a>
    </p>
  </footer>
)

export default Footer
