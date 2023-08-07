import React, { useState } from "react";
import { v4 as uniqueId } from "uuid";

import "./index.css";
import MoneyDetails from "../MoneyDetails";
import TransactionItem from "../TransactionItem";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

const MoneyManager = () => {
  const [transactionsList, setTransactionsList] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [optionId, setOptionId] = useState(transactionTypeOptions[0].optionId);

  const AddTransaction = (event) => {
    event.preventDefault();

    const typeOption = transactionTypeOptions.find(
      (eachTransaction) => eachTransaction.optionId === optionId
    );
    const { displayText } = typeOption;

    if (titleInput === "" || amountInput === "") {
      alert("Please Enter All The Fields");
    } else {
      const newTransaction = {
        id: uniqueId(),
        title: titleInput.trim(),
        amount: parseInt(amountInput),
        type: displayText,
      };

      setTransactionsList((prevState) => [...prevState, newTransaction]);
      setAmountInput("");
      setTitleInput("");
      setOptionId(transactionTypeOptions[0].optionId);
    }
  };

  const getBalance = () => {
    let balanceAmount = 0;
    let incomeAmount = 0;
    let expensesAmount = 0;

    transactionsList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount;
      } else {
        expensesAmount += eachTransaction.amount;
      }
    });

    balanceAmount = incomeAmount - expensesAmount;

    return balanceAmount;
  };
  const getIncome = () => {
    let incomeAmount = 0;
    transactionsList.forEach((each) => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount;
      }
    });
    return incomeAmount;
  };
  const getExpenses = () => {
    let expensesAmount = 0;

    transactionsList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount;
      }
    });

    return expensesAmount;
  };

  const balanceAmount = getBalance();
  const incomeAmount = getIncome();
  const expensesAmount = getExpenses();

  const deleteTransaction = (id) => {
    const filterdList = transactionsList.filter((each) => each.id !== id);
    setTransactionsList(filterdList);
  };

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="header-content">
            Welcome back to your
            <span className="money-manager-text"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction-details">
          <form className="transaction-form" onSubmit={AddTransaction}>
            <h1 className="transaction-header">Add Transaction</h1>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={(event) => setTitleInput(event.target.value)}
              className="input"
              placeholder="TITLE"
            />
            <label className="input-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="number"
              id="amount"
              className="input"
              value={amountInput}
              onChange={(event) => setAmountInput(event.target.value)}
              placeholder="AMOUNT"
            />
            <label className="input-label" htmlFor="select">
              TYPE
            </label>
            <select
              id="select"
              className="input"
              value={optionId}
              onChange={(event) => setOptionId(event.target.value)}
            >
              {transactionTypeOptions.map((eachOption) => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-transactions">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map((eachTransaction) => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyManager;
