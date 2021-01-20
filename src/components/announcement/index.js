import { useState } from 'preact/hooks'
import style from './style.css'
import config from '../../../siteConfig'


const Announcement = () => {
  const [show, setShow] = useState(true)

  const hidden = () => setShow(false)

  return (
    <div>
      {show ? (
        <div class={style.container} role='banner'>
          <span class={style.content}>{config.announcementBar}</span>
          <a
            class={style.link}
            href={config.announcementBarLink}
            target='_blank'
            rel='noreferrer'
          >
            
            tại đây
          </a>
          <button
            aria-label='Close'
            class={style.button}
            type='button'
            onClick={hidden}
          >
            {' '}
            <span aria-hidden='true' class={style.button__icon}>
              ×
            </span>
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Announcement
