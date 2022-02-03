import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

 

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  
  return (
    <Card className="expense-cont">
      <ExpenseDate date={props.date} />
      <div className="expense-item">
        <h2>{title}</h2>
        <div className="expense-price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title!</button>
    </Card>
  );
};

export default ExpenseItem;
