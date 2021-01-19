import { useState } from 'preact/hooks'
import style from './style.css'

const config = {
  title: '⭐️ Nếu bạn 💗️ thichtienganh, góp ý phát triển',
  link: '#',
}

const Announcement = () => {
  const [show, setShow] = useState(true)

  const hidden = () => setShow(false)

  return (
    <div>
      {show ? (
        <div class={style.container} role='banner'>
          <span class={style.content}>{config.title}</span>
          <a
            class={style.link}
            href={config.link}
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            tại đây
          </a>{' '}
          <span class={style.content}>⭐️</span>
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
