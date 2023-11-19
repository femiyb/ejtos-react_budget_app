import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../App.css';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                name: props.name,
                cost: 10,
            }
        });
    }

    const decreaseAllocation = () => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {
                name: props.name,
                cost: 10,
            }
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button onClick={increaseAllocation} class="plus-button">+</button></td>
            <td><button onClick={decreaseAllocation} class="decrease-button">-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;
