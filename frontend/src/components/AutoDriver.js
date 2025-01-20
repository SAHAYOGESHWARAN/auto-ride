import React, { useState } from 'react';
import axios from 'axios';

const AutoDriver = () => {
    const [name, setName] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [licensePlate, setLicensePlate] = useState('');

    const registerDriver = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/drivers/register', { name, vehicle, licensePlate });
            console.log('Driver registered:', response.data);
        } catch (error) {
            console.error('Error registering driver:', error);
        }
    };

    return (
        <form onSubmit={registerDriver}>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Vehicle" onChange={(e) => setVehicle(e.target.value)} required />
            <input type="text" placeholder="License Plate" onChange={(e) => setLicensePlate(e.target.value)} required />
            <button type="submit">Register Driver</button>
        </form>
    );
};

export default AutoDriver;  

