import React, { useState } from 'react';
import axios from 'axios';

const AutoDriver = () => {
    const [name, setName] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const registerDriver = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('/api/drivers/register', { name, vehicle, licensePlate });
            setSuccess('Driver registered successfully!');
            console.log('Driver registered:', response.data);
            // Clear the form fields after successful registration
            setName('');
            setVehicle('');
            setLicensePlate('');
        } catch (error) {
            setError(error.response?.data?.message || 'Error registering driver. Please try again.');
            console.error('Error registering driver:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Register Driver</h2>
            <form onSubmit={registerDriver}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Vehicle"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="License Plate"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register Driver'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default AutoDriver;