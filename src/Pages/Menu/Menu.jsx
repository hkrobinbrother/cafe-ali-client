import { Title, Meta } from "react-head";
import Cover from "../../Shared/Cover";
import benner from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === "dessert")
  const soup = menu.filter(item => item.category === "soup")
  const salad = menu.filter(item => item.category === "salad")
  const pizza = menu.filter(item => item.category === "pizza")
  const offered = menu.filter(item => item.category === "offered")
  return (
    <div>
      <Title>CAFE-ALI | Menu</Title>
      <Cover bennerImg={benner} bennerTitle={"Our menu"}/>
      {/*offered */}
      <SectionTitle subheading={"Don't Miss"} hading={"Today's offer"}></SectionTitle>
      <MenuCategory item={offered}/>
      {/* dessert */}
      <MenuCategory item={dessert} bennerTitle="dessert" bennerImg={dessertImg}></MenuCategory>
      {/* pizza */}
      <MenuCategory item={pizza} bennerTitle="pizza" bennerImg={pizzaImg}></MenuCategory>
      {/* salad */}
      <MenuCategory item={salad} bennerTitle="salad" bennerImg={saladImg}></MenuCategory>
      {/* soup */}
      <MenuCategory item={soup} bennerTitle="soup" bennerImg={soupImg}></MenuCategory>
      
      
      
    </div>
  );
};

export default Menu;
