import React from 'react';
import './assets/styles/scss/App.scss';
import Input from './components/FormElements/Input'
import Navigation from './components/Navigation'
import ListingBooks from './components/ListingBooks'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app px-5 mt-16">
          <div className="flex justify-center">
            <Input placeholder='Search book' name="search-book" id="searck-book"></Input>
          </div>
          <div className="my-9">
            <h1 className="text-2xl text-gray-700">Hi, <span className="text-red-400 font-semibold">Mehmed Ai Fatih</span> <span style={{ 'fontFamily': 'Roboto' }}>👋</span></h1>
          </div>
          <ListingBooks></ListingBooks>
        </div>
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
