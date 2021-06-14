import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="bg-white absolute w-full bottom-0 py-5">
        <ul className="flex text-center text-xs">
          <li className="flex flex-1 text-center flex-col items-center">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 6.22222L9 0L17 6.22222V16C17 16.9818 16.2041 17.7778 15.2222 17.7778H2.77778C1.79594 17.7778 1 16.9818 1 16V6.22222Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6.33333 17.7778V8.88892H11.6667V17.7778" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="mt-2">Home</span>
          </li>
          <li className="flex flex-1 text-center flex-col items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6719 11.4688H19.5234V8.30469H11.6719V0.0625H8.50781V8.30469H0.65625V11.4688H8.50781V19.7109H11.6719V11.4688Z" fill="#BFBEBF"/>
            </svg>
            <span className="mt-2 text-gray-400">Add Boo</span>
          </li>
          <li className="flex flex-1 text-center flex-col items-center">
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 18V16C17 13.7909 15.2091 12 13 12H5C2.79086 12 1 13.7909 1 16V18" stroke="#BFBEBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="4" r="4" stroke="#BFBEBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="mt-2 text-gray-400">Profile</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
