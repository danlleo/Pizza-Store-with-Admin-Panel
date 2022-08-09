<<<<<<< HEAD
import Banner from "../components/Banner/Banner"
import DishContainer from "../components/DishContainer/DishContainer"
import Footer from "../components/Footer/Footer"
=======
import Banner from '../components/Banner/Banner'
import DishContainer from '../components/DishContainer/DishContainer'
import Footer from '../components/Footer/Footer'
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510

const Home = () => {
  return (
    <>
      <Banner />
      <DishContainer container_id={'pizza'} data={[]} />
      <DishContainer container_id={'combo'} data={[]} />
      <DishContainer container_id={'snacks'} data={[]} />
      <DishContainer container_id={'drinks'} data={[]} />
      <DishContainer container_id={'desserts'} data={[]} />
      <Footer />
    </>
  )
}

export default Home
