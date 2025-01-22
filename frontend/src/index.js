import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18
import App from './App';
import './index.css'; // Global CSS file
import reportWebVitals from './reportWebVitals'; // Optional for measuring performance
import { BrowserRouter as Router } from 'react-router-dom'; // For routing

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Please try again later.</h1>;
        }

        return this.props.children; 
    }
}

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
        </ErrorBoundary>
    </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();