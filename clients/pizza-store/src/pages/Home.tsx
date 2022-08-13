import Banner from '../components/Banner/Banner'
import DishContainer from '../components/DishContainer/DishContainer'

export default () => {
  return (
    <>
      <Banner />
      <DishContainer containerId={'pizza'} data={[]} />
      <DishContainer containerId={'combo'} data={[]} />
      <DishContainer containerId={'snacks'} data={[]} />
      <DishContainer containerId={'drinks'} data={[]} />
      <DishContainer containerId={'desserts'} data={[]} />
    </>
  )
}
