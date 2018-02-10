import React from 'react';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import {AppRoute, EmptyLayout, MainLayout} from './components/layouts/index';

const App = () => (
    <div>
        <AppRoute exact path="/" layout={MainLayout} component={HomePage} />
        <AppRoute exact path="/login" layout={EmptyLayout} component={LoginPage} />
    </div>
);

export default App;
