import React from 'react'

export const ExpenseItem = ({expense}) => {
  const {id, charge, amount} = expense
  return (
    <li>
      hello from expense item
    </li>
  )
}
