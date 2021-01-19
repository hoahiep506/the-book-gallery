import { h } from 'preact'
import { useState } from 'preact/hooks'
import style from './style.css'


const createMarkup = () => ({
  __html: '⭐️ Nếu bạn 💗️ thichtienganh, góp ý phát triển',
})

const createLink = () => 'https://www.youtube.com/watch?v=tl1hBnX-Gr4'


const Announcement = () => (
  
  <div class={style.container} role='banner'>
    <span
      class={style.content}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={createMarkup()}
    />
    <a class={style.link} href={createLink()} target='_blank' rel='noreferrer'>
      {' '}
      tại đây
    </a>{' '}
    <span class={style.content}>⭐️</span>
    <button aria-label='Close' class={style.button} type="button">
      {' '}
      <span aria-hidden='true' class={style.button__icon}>
        ×
      </span>
    </button>
  </div>
)


export default Announcement
