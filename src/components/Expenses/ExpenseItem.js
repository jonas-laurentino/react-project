import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className="expense-cont">
      <ExpenseDate date={props.date} />
      <div className="expense-item">
        <h2>{props.title}</h2>
        <div className="expense-price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
