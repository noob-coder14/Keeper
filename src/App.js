import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Keeperboard} from './components/Keeperboard';

function App() {
    return (
        <div>
        <Header />
        <Keeperboard />
        <Footer />
        </div>
    );
}

export default App;