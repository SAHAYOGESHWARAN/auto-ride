import React from 'react';
import Rider from './components/Rider';
import AutoDriver from './components/AutoDriver';

const App = () => {
    return (
        <div>
            <h1>Auto Rider App</h1>
            <h2>Register Rider</h2>
            <Rider />
            <h2>Register Auto Driver</h2>
            <AutoDriver />
        </div>
    );
};

export default App;