import { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import { Title, Meta } from "react-head";

import OrderTab from "./OrderTab";
import { useParams } from "react-router";

const Order = () => {
  const categories = ["salad","pizza","soup","dessert","drink"]
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Title>CAFE-ALI | ORDER</Title>
      <Cover bennerImg={orderImg} bennerTitle="ORder food"></Cover>
      <div className= "px-2 md:mt-4 text-gray-500 font-bold">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList >
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
           
          </TabList>
          <TabPanel>
           <OrderTab items={dessert}/>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
