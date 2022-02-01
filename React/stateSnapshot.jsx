import React, { useState } from 'react';
import './ExpenseForm.style.css';

const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({
        enteredTitle: 'Title...',
        enteredAmount: '0.00',
        enteredDate: 'mm/dd/yyyy',
    });

    // we should never depend on the previous state 
    // when we update state. If our next state would be reliant
    // on the previous state we cannot simply call our setter function.
    // Instead, we must pass a function to prevState starting a new execution
    // context. This state should take in our previous state which will
    // automatically be injected by React. We then spread this state to
    // ensure our old values are passed into our object, and then
    // override any values we want to update. 

    // This ensures our previous state is as we expect it to be.
    // Though the other method works in most cases, there is a chance
    // that we could theoretically end up using the wrong state if
    // we have many updates run at once. This is due to
    // how react schedules updates. 

    // By using this function, react guarantees our state snapshot to be the
    // latest state. 

    const onChangeHandler = event => {
        setUserInput(prevState => {
            return {
                ...prevState, 
                [event.target.name]: event.target.value
            };
        });
    };

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
