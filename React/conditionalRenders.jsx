// Here is an example in which a component is conditionally rendered.
// If no Expenses exist a message is rendered instead. 

// We could take this further and separate the filter logic out into
// it's own component.


import React, { useState } from 'react';
import Card from '../Card/Card.component';
import ExpenseFilter from './ExpenseFilter/ExpenseFilter.component';
import ExpenseItem from './ExpenseItem/ExpenseItem.component';
import './Expenses.style.css';

const Expenses = ({
    expenses,
}) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filteredExpenses = expenses.filter(expense => (
        expense.date.getFullYear().toString() === filteredYear
    ));

    const selectExpenseFilterHandler = year => {
        setFilteredYear(year);
    };

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) (
        expensesContent =
            filteredExpenses.map(expense => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
    );

    return (
        <Card className='expenses'>
            <ExpenseFilter onSelectYearFilter={selectExpenseFilterHandler} />
            {expensesContent}
        </Card>
    )
};

export default Expenses;
