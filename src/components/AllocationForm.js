import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');

    const handleSubmit = () => {
        const numericCost = parseInt(cost, 10);

        if (numericCost > 20000) {
            alert("Budget exceeding £20000");
            setCost("");
            return;
        } else if (numericCost > remaining) {
            alert(`The value cannot exceed remaining funds £${remaining}`);
            setCost("");
            return;
        }

        const expense = { name, cost: numericCost };
        dispatch({
            type: action === 'Reduce' ? 'RED_EXPENSE' : 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="departmentSelect">Department</label>
                    </div>
                    <select className="custom-select" id="departmentSelect" onChange={(e) => setName(e.target.value)}>
                        <option defaultValue>Choose...</option>
                        {['Marketing', 'Sales', 'Finance', 'HR', 'IT', 'Admin'].map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="actionSelect">Allocation</label>
                    </div>
                    <select className="custom-select" id="actionSelect" onChange={(e) => setAction(e.target.value)}>
                        <option defaultValue value="Add">Add</option>
                        <option value="Reduce">Reduce</option>
                    </select>

                    <span style={{ marginLeft: '2rem', fontSize: '1rem' }}>{currency}</span>
                    <input
                        required
                        type='number'
                        id='cost'
                        value={cost}
                        step="10"
                        max="20000"
                        style={{ marginLeft: '1rem', width: '10rem' }}
                        onChange={(e) => setCost(e.target.value)}
                    />

                    <button className="btn btn-primary" onClick={handleSubmit} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
