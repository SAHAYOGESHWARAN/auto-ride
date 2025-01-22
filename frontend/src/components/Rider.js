import React, { useState } from 'react';
import axios from 'axios';

const Rider = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const registerRider = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('/api/riders/register', { name, email, phone });
            setSuccess('Rider registered successfully!');
            console.log('Rider registered:', response.data);
            // Clear the form fields after successful registration
            setName('');
            setEmail('');
            setPhone('');
        } catch (error) {
            setError(error.response?.data?.message || 'Error registering rider. Please try again.');
            console.error('Error registering rider:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Register Rider</h2>
            <form onSubmit={registerRider}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone (format: (XXX) XXX-XXXX)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register Rider'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default Rider;