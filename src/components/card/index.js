import data from '../../data/data'
import style from './style.css'

function Card() {
  return (
    <ul class={style.root}>
      <h1> Book</h1>
      {data.map(d => {
        <li>
          {d.name}
        </li>
      })}
    </ul>
  )
}

export default Card