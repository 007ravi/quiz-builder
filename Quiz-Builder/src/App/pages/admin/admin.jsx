import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Routes from './routes';

class Admin extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes />
            </div>
        );
    }
}

export default Admin;