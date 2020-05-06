import React, { Component } from 'react';
import styles from './Artist.module.css';

class Artist extends Component {
    state = {
        tabs: []
    }
    render() {
        return(
            <div>
            <h1>Search Tab by Artist</h1>
            <input type="text" />
            <button>Search</button>
            </div>
        )
    }
}

export default Artist