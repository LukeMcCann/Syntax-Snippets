import React, { useState } from 'react';
import './ExpenseForm.style.css';

const ExpenseForm = () => {
    
    // const [enteredTitle, setEnteredTitle] = useState('Title...');
    // const [enteredAmount, setEnteredAmount] = useState('0.00');
    // const [enteredDate, setEnteredDate] = useState('mm/dd/yyyy');

    const [userInput, setUserInput] = useState({
        enteredTitle: 'Title...',
        enteredAmount: '0.00',
        enteredDate: 'mm/dd/yyyy',
    });

    const onChangeHandler = event => {
        setUserInput({
            ...userInput, 
            [event.target.name]: event.target.value
        });
    };

    // const titleChangeHandler = event => {
    //     setEnteredTitle(event.target.value);
    // };
    
    // const amountChangeHandler = event => {
    //     setEnteredAmount(event.target.value);
    // };

    // const dateChangeHandler = event => {
    //     setEnteredDate(event.target.value);
    // };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={`${userInput.enteredTitle}`} onChange={onChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={`${userInput.enteredAmount}`} min="0.01" step="0.01" onChange={onChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={`${userInput.enteredDate}`} min="2019-01-01" max="2022-12-31" onChange={onChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
};

export default ExpenseForm;
