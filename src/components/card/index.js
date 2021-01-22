import { h } from 'preact'
import usePagination from '@mariosant/react-pagination-hook'

import data from '../../data/data'
import style from './style.css'

/*
const Card = () => (
  <div class={style.container}>
    {data.map((d) => (
      <div class={style.card}>
        <div class={style.card__img}>
          <img src={d.img} alt={d.title} />
        </div>

        <div class={style.label}>
          <span>{d.category}</span>
        </div>

        <div class={style.info}>
          <div class={style.info__title}>{d.title}</div>
          <div class={style.info__author}>
            <span>{d.author}</span>
          </div>
        </div>

        <div class={style.btn}>
          <a href={d.linkDl} target='_blank' rel='noreferrer' download>
            Download
          </a>
        </div>
      </div>
    ))}
  </div>
)
*/

const Card = () => {
  const { nextPage, previousPage, paginated } = usePagination(data)

  return (
    <div class={style.container}>
      <div class={style.containerCard}>
        {paginated.map((d) => (
          <div class={style.card}>
            <div class={style.card__img}>
              <img src={d.img} alt={d.title} />
            </div>

            <div class={style.label}>
              <span>{d.category}</span>
            </div>

            <div class={style.info}>
              <div class={style.info__title}>{d.title}</div>
              <div class={style.info__author}>
                <span>{d.author}</span>
              </div>
            </div>

            <div class={style.btn}>
              <a href={d.linkDl} target='_blank' rel='noreferrer' download>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <div class={style.buttonPage}>
        <button class={style.buttonPage__child} onClick={previousPage}>
          Quay lại trang trước
        </button>
        <button class={style.buttonPage__child} onClick={nextPage}>
          Trang tiếp theo
        </button>
      </div>
    </div>
  )
}

export default Card
