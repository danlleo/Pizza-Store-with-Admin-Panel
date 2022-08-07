import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import DishContainer from "./components/DishContainer/DishContainer";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <DishContainer container_id={"pizza"} data={[]} />
      <DishContainer container_id={"combo"} data={[]} />
      <DishContainer container_id={"snacks"} data={[]} />
      <DishContainer container_id={"drinks"} data={[]} />
      <DishContainer container_id={"desserts"} data={[]} />
      <Footer />
    </>
  );
}
