import data from '../../data/data'
import style from './style.css'

/*
const Card = () => (
  <div class={style.container}>
    <div class={style.card}>
      <div class={style.card__img}>
        <img src='https://i.imgur.com/WesSXRt.jpg'></img>
      </div>
      <div class={style.info}>
        <div class={style.info__title}>Get Ready for IELTS Writing</div>
        <div class={style.info__author}>
          <span>Fiona Aish</span>
        </div>
      </div>
      <div class={style.btn}>
        <a
          href='https://shon.xyz/eMkA16'
          target='_blank'
          rel='noreferrer'
          download
        >
          Download
        </a>
      </div>
    </div>
  </div>
)
*/

const Card = () => (
  <div class={style.container}>
    {data.map((d) => (
      <div class={style.card}>
        <div class={style.card__img}>
          <img src={d.img} alt={d.name} />
        </div>

        <div class={style.info}>
          <div class={style.info__title}>{d.name}</div>
          <div class={style.info__author}>
            <span>{d.author}</span>
          </div>
        </div>

        <div class={style.btn}>
          <a
            href={d.linkDl}
            target='_blank'
            rel='noreferrer'
            download
          >
            Download
          </a>
        </div>
      </div>
    ))}
  </div>
)
export default Card
