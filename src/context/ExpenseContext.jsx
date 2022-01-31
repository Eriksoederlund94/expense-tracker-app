import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid';

const ExpenseContext = React.createContext();

export function useExpence() {
  return useContext(ExpenseContext);
}

export const ExpenseProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  function addExpense({ description, amount, budgetId }) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: nanoid(), description, amount, budgetId }];
    });
  }

  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: nanoid(), name, max }];
    });
  }
  function deleteBudget({ id }) {
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }
  function deleteExpense({ id }) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <ExpenseContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
