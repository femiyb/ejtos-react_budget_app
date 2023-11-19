import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropDown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    }

    return (
        <div className='alert alert-success'>
            <span>Currency: </span>
            <select 
                name="currency" 
                id="currency"
                style={{ marginLeft: '2rem', width: '10rem' }}
                onChange={(event) => handleCurrencyChange(event.target.value)}
                value={currency}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencyDropDown;
