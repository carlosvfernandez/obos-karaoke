import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import HomePage  from './pages/HomePage';

const SongsList = lazy(() => import('./components/SongsList'))
const ArtistsList = lazy(() => import('./components/ArtistsList'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage}></Route>
            <Suspense fallback={<h1>Cargando Lista…</h1>}>
              <Route path="/songs" component={SongsList}></Route>
              <Route path="/artists" component={ArtistsList}></Route>
            </Suspense>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
