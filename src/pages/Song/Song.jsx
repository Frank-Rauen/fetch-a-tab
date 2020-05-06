import React, { Component } from 'react';
import styles from './Song.module.css';

class Song extends Component {
    state = {
        tabs: []
    }

    render() {
        return(
            <div>
            <h1>Search Tab by Song</h1>
            <input type="text" />
            <button>Search</button>
            </div>
        )
    }
}

export default Song