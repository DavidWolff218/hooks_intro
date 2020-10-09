import React from 'react';
import './App.css'
import {ExpenseForm} from './components/ExpenseForm';
import {ExpenseList} from './components/ExpenseList';
import {Alert} from './components/Alert'


function App() {
  return (
    <>
    <Alert></Alert>
    <ExpenseForm></ExpenseForm>
    <ExpenseList></ExpenseList>
      

    </>
  );
}

export default App;
