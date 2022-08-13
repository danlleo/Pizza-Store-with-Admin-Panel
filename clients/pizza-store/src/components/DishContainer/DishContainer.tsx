import DishItem from '../DishItem/DishItem'
import './DishContainer.css'

interface Props {
  containerId: string
  data: []
}

export default ({ containerId, data }: Props) => {
  return (
    <div className='dishContainer clap-width' id={containerId}>
      <h1>Pizza</h1>
      <div className='dishContainer-list'>
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
        <DishItem />
      </div>
    </div>
  )
}
