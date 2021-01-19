import style from './style.css'

const Announcement = () => (
  <div class={style.container} role='banner'>
    <span class={style.content}>
      ⭐️ Giúp thichtienganh phát triển website bằng góp ý, đóng góp{' '}
      <a class={style.link} rel='nofollow' href='#'>
        {' '}
        tại đây
      </a>{' '}
      ⭐️
    </span>
  </div>
)

export default Announcement