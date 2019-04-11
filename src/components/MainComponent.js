import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Dishdetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";

export default function Main(props) {
  const [dishes, setDishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  function onDishSelect(dishId) {
    setSelectedDish(dishId);
  }

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Fusion Menu</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={dishId => onDishSelect(dishId)} />
      <Dishdetail
        selected={dishes.filter(dish => dish.id === selectedDish)[0]}
      />
    </div>
  );
}
