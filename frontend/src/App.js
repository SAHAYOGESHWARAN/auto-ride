import React from 'react';
import Rider from './components/Rider';
import AutoDriver from './components/AutoDriver';
import './App.css'; // Import a CSS file for styling

const App = () => {
    return (
        <div className="app-container">
            <h1 className="app-title">Auto Rider App</h1>
            <div className="form-container">
                <h2>Register Rider</h2>
                <Rider />
            </div>
            <div className="form-container">
                <h2>Register Auto Driver</h2>
                <AutoDriver />
            </div>
        </div>
    );
};

export default App;