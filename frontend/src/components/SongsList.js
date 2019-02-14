import React, { Component } from 'react'
import Song from './Song'

export default class SongsList extends Component {

    state = {
        songsList: []
    }

    componentDidMount() {
        this.getSongsList();
    }

    getSongsList = async () => {
        const a = await fetch("http://localhost:3800/songs")
        const resp = await a.json();
        this.setState({ songsList: resp })
    }

    render() {
        return (
            <table>
                <tbody>
                    {
                        
                        this.state.songsList.map(song => (
                            <Song key={song.id} song={song}></Song>
                        ))

                    }
                </tbody>
            </table >
        )
    }
}
