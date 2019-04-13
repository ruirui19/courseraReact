import React from "react";
import Dishdetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Main(props) {
  const dishes = DISHES;
  const comments = COMMENTS;
  const promotions = PROMOTIONS;
  const leaders = LEADERS;

  const HomePage = () => {
    return (
      <Home
        dish={dishes.filter(dish => dish.featured)[0]}
        promotion={promotions.filter(promo => promo.featured)[0]}
        leader={leaders.filter(leader => leader.featured)[0]}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <Dishdetail
        dish={
          dishes.filter(
            dish => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.filter(
          comment => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route exact path="/contactus" component={Contact} />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={leaders} />}
        />
        <Route path="/menu/:dishId" component={DishWithId} />
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
