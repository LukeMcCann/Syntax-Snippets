import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate/ExpenseDate.component';
import PriceTag from './PriceTag/PriceTag.component';
import Card from '../../Card/Card.component';
import './ExpenseItem.styles.css';

const ExpenseItem = ({
    title, 
    date, 
    amount
}) => {

    const [rubric, setRubric] = useState(title);

    /**
     * Notice how when the log runs the old
     * value is logged. This is because the set function
     * on the state does not immediately run the update
     * on the title. Instead, it schedules the state 
     * to be updated on the next render.
     */
    const handleOnClick = () => {
        setRubric('Updated');
        console.log(title);
    };

    return (
        <Card 
            classes={`expense-item`}
        >
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{rubric}</h2>
                <PriceTag amount={amount} />
            </div>
            <button
                onClick={handleOnClick }
            >Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
