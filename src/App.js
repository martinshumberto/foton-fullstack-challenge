import React from 'react';
import './assets/styles/scss/App.scss';
import Input from './components/FormElements/Input'
import Navigation from './components/Navigation'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app px-5 mt-12">
          <div className="flex justify-center">
            <Input placeholder='Search book' name="search-book" id="searck-book"></Input>
          </div>
          <div className="mt-5">
            <h1 className="text-2xl text-gray-700">Hi, <span className="text-red-400 font-semibold">Mehmed Ai Fatih</span> <span style={{ 'fontFamily': 'Roboto' }}>👋</span></h1>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
