import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, About } from '../pages';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                React - Router
                <Menu/>
                <Routes>
                    <Route exact path="/" element={ <Home/> }/>
                    <Route path="/about" element={ <About/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;