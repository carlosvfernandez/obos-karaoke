import React, { Component } from 'react'
import Artist from './Artist'

export default class SongsList extends Component {

    state = {
        artistsList: []
    }

    componentDidMount() {
        this.getArtistsList();
    }

    getArtistsList = async () => {
        const a = await fetch("http://localhost:3800/artists")
        const resp = await a.json();
        this.setState({ artistsList: resp })
    }

    render() {
        return (
            <table>
                <tbody>
                    {
                        this.state.artistsList.map(artist => (
                            <Artist key={artist.id} artist={artist}></Artist>
                        ))
                    }
                </tbody>
            </table >
        )
    }
}
