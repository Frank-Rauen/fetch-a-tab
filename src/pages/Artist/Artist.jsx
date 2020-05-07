import React, { Component } from 'react';
import XMLViewer from 'react-xml-viewer';
import styles from './Artist.module.css';

class Artist extends Component {
    state = {
        tabs: []
    }

    handleGetTabs = async searchTerm => {
        try {
        const apiUrl = `https://www.songsterr.com/a/ra/songs/byartists.xml?artists=${searchTerm}`
        const response = await fetch(apiUrl);
        const { tabs } = response
        this.setState({ tabs })
        } catch (error) {
            alert('Artist Not Found');
        }
    }

    componentDidMount() {
        this.handleGetTabs('metallica');
    }

    render() {
        return(
            <div>
            <h1>Search Tab by Artist</h1>
            <form onSubmit = {this.handleGetTabs}>
            <input type="text"
            ref={(searchTerm) => this.searchTerm = searchTerm}/>
            <XMLViewer  />
            </form>
            </div>
        )
    }
}

export default Artist