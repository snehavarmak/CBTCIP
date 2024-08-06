import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
