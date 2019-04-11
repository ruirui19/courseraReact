import React, { useState } from "react";
import Dishdetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Main(props) {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  //   function onDishSelect(dishId) {
  //     setSelectedDish(dishId);
  //   }

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Redirect to="/home" />
        {/* function like a default page */}
      </Switch>
      {/* <Dishdetail
        selected={dishes.filter(dish => dish.id === selectedDish)[0]}
      /> */}
      <Footer />
    </div>
  );
}
