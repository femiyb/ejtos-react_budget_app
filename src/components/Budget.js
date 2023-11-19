import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);

    const calculateTotalExpenses = () => {
        return expenses.reduce((total, item) => total + item.cost, 0);
    };

    const totalExpenses = calculateTotalExpenses();

    const handleBudgetChange = (newBudget) => {
        newBudget = Number(newBudget);

        if (newBudget > 20000) {
            alert("Budget exceeding £20000");
            return;
        }

        if (newBudget < totalExpenses) {
            alert(`The budget must be more than spending £${totalExpenses}`);
            return;
        }

        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required
                type='number'
                id='cost'
                value={budget}
                step="10"
                max="20000"
                style={{ marginLeft: '2rem', width: '10rem' }}
                onChange={(event) => handleBudgetChange(event.target.value)}
            />
        </div>
    );
};

export default Budget;
