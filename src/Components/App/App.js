import React from 'react';
import './App.css';
import { SearchResults } from '../SearchResults/SearchResults';
import { SearchBar } from '../SearchBar/SearchBar';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      searchResults: [{name: 'name', artist: 'artist', album: 'album', id: 1}, 
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      playlistName: 'default list',
      playlistTracks: [{name: 'playlist songname1', artist: 'playlist artist1', album: 'playlist album1', id: 4}, 
      {name: 'playlist songname2', artist: 'playlist artist2', album: 'playlist album2', id: 5}, 
      {name: 'playlist songname3', artist: 'playlist artist3', album: 'playlist album3', id: 6}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(curTrack => curTrack.id === track.id)){
      return;
    }
    let list = this.state.playlistTracks;
    list.push(track);
    this.setState({playlistTracks: list});
  }

  removeTrack(track){
    let list = this.state.playlistTracks.filter(curTrack => curTrack.id !== track.id);;
    this.setState({playlistTracks: list});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  render(){
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} /> 
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} 
          onNameChange={this.updatePlaylistName} /> 
        </div>
      </div>
    </div>
    )
  }
  
}

export default App;
