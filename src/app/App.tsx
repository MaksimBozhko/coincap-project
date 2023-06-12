import React from 'react';
import {Navbar} from 'widgets/Navbar/ui/Navbar';
import { AppRouter } from './providers/router';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
