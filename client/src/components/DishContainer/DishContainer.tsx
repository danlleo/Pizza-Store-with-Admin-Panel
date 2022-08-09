<<<<<<< HEAD
import DishItem from "../DishItem/DishItem"
import "./DishContainer.css"
=======
import DishItem from '../DishItem/DishItem'
import './DishContainer.css'
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510

interface Props {
  container_id: string
  data: []
}

const DishContainer = ({ container_id, data }: Props) => {
  return (
    <div className='dishContainer clap-width' id={container_id}>
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

export default DishContainer
