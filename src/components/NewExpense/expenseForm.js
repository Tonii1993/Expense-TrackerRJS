import React, { useState } from "react";

//import './newExpense';
import './expenseForm.css';

const ExpenseForm = (props) => {
    const [addTitle, setAddTitle] = useState('');
    const [chooseDate, setChooseDate] = useState('');
    const [addAmount, setAddAmount] = useState('');

    // const [userInput, setUserInput ] = useState({
    //     addTitle: '',
    //     chooseDate: '',
    //     addAmount: ''
    //});

    const titleChangeHandler = (event) => {
        setAddTitle(event.target.value);
        //#2 this isnt a safer way, when you depends in previous state
        // setUserInput({
        //     ...userInput,
        //     addTitle: event.target.value
        // });
        //#3this is a safer way,when you depends in previous state
        // setUserInput((prevState) => {
        //     return {...prevState, addTitle: event.target.value};
        // });
    };

    const dateChangeHandler = (event) =>{
        setChooseDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     chooseDate: event.target.value
        // });
    };

    const amountChangeHandler = (event) => {
        setAddAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     addAmount: event.target.value
        // });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: addTitle,
            date: new Date(chooseDate),
            amount: +addAmount
        };
        
        props.onSaveExpenseData(expenseData);
        setAddTitle('');
        setChooseDate('');
        setAddAmount('');
    };


    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                     value={addTitle} 
                     onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" 
                    min="2018-01-01" 
                    max="2022-12-31" 
                    value={chooseDate}
                    onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" 
                    min="0.01" step="0.01" 
                    value={addAmount}
                    onChange={amountChangeHandler}/>
                </div>
                 
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

};

export default ExpenseForm;