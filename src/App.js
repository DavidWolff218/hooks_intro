import React, {useState} from 'react';
import './App.css'
import {ExpenseForm} from './components/ExpenseForm';
import {ExpenseList} from './components/ExpenseList';
import {Alert} from './components/Alert'
import uuid from 'react-uuid'

const initialExpenses = [
  {id:uuid(), charge: "rent", amount:1600},
  {id:uuid(), charge: "car payment", amount:400},
  {id:uuid(), charge: "credit card bill", amount:1200}
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
 
  return (
    <>
    <Alert></Alert>
    <h1>budget calculator</h1>
    <ExpenseForm></ExpenseForm>
    <ExpenseList></ExpenseList>
    </>
  );
}

export default App;
