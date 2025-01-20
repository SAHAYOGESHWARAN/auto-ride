import React, { useState } from 'react';
import axios from 'axios';

const Rider = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const registerRider = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/riders/register', { name, email, phone });
            console.log('Rider registered:', response.data);
        } catch (error) {
            console.error('Error registering rider:', error);
        }
    };

    return (
        <form onSubmit={registerRider}>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required />
            <button type="submit">Register Rider</button>
        </form>
    );
};

export default Rider;