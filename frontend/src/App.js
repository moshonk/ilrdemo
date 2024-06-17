import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PrescriptionPage from './pages/PrescriptionPage';
import InventoryPage from './pages/InventoryPage';
import BillingPage from './pages/BillingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/prescriptions" component={PrescriptionPage} />
        <Route path="/inventory" component={InventoryPage} />
        <Route path="/billing" component={BillingPage} />
      </Switch>
    </Router>
  );
}

export default App;
