import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.classes = {
      inputContainer: 'relative w-full',
      inputIcon: 'absolute inset-y-0 left-0 flex items-center pl-2',
      inputButton: 'p-1 focus:outline-none focus:shadow-outline',
      inputField: 'py-2 h-12 w-full placeholder-black placeholder-opacity-75 rounded-lg text-base text-black bg-white rounded-md pl-10 focus:outline-none'
    }
  }
  render() {
    return (
      <div className={this.classes.inputContainer}>
        <span className={this.classes.inputIcon}>
          <button type="submit" className={this.classes.inputButton}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.6667 6.66668C14.6667 9.6122 12.2789 12 9.33333 12C6.38781 12 4 9.6122 4 6.66668C4 3.72116 6.38781 1.33334 9.33333 1.33334C12.2789 1.33334 14.6667 3.72116 14.6667 6.66668ZM5.33333 6.66668C5.33333 8.87582 7.12419 10.6667 9.33333 10.6667C11.5425 10.6667 13.3333 8.87582 13.3333 6.66668C13.3333 4.45754 11.5425 2.66668 9.33333 2.66668C7.12419 2.66668 5.33333 4.45754 5.33333 6.66668Z" fill="#DCD8D8"/>
              <path d="M3.86193 11.1953L1.5286 13.5286C1.26825 13.7889 1.26825 14.2111 1.5286 14.4714C1.78895 14.7318 2.21106 14.7318 2.4714 14.4714L4.80474 12.1381C5.06509 11.8777 5.06509 11.4556 4.80474 11.1953C4.54439 10.9349 4.12228 10.9349 3.86193 11.1953Z" fill="#F0F0F0"/>
              <circle cx="9.33333" cy="6.66667" r="0.666667" fill="#F0F0F0"/>
            </svg>
          </button>
        </span>
        <input type="input" name={this.props.name} id={this.props.id || this.props.name} className={this.classes.inputField} placeholder={this.props.placeholder}></input>
      </div>
    );
  }
}

export default Input;
