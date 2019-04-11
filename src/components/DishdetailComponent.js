import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function Dishdetail(props) {
  function renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>
                <b>{dish.name}</b>
              </CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div />;
  }

  function renderComments(selected) {
    if (selected != null) {
      if (selected.comments != null) {
        return (
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {selected.comments.map(comment => {
                return (
                  <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                      -- {comment.author},
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit"
                      }).format(new Date(Date.parse(comment.date)))}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    } else return <div />;
  }
  return (
    <div className="row">
      {renderDish(props.selected)}
      {renderComments(props.selected)}
    </div>
  );
}
