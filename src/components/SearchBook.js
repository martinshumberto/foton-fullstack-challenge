import React from 'react';
import '../assets/styles/scss/SearchBook.scss';

class SearchBook extends React.Component {
  render() {
    return (
      <div className="search-book">
        <input placeholder="Search Book"></input>
      </div>
    );
  }
}

export default SearchBook;
