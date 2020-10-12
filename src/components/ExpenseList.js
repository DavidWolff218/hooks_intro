import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import { MdDelete } from 'react-icons/md'
import { FaBeer } from 'react-icons/fa'

export const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems  }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && <button className="btn" onClick={clearItems}>
        clear expenses 
        <MdDelete className="btn-icon" />
        </button>}
    </>
  );
};
