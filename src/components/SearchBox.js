import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        //any time the searchbox changes (the event that triggers searchChange() on the DOM). So, we are saying everytime the onchange event triggers, call the searchChange funtion. And searchChange function is a prop of the onSearchChange that is defined on the App.js file. Thats how we communicate with the parent. The trigger of the event happens on the child which is SearcBox.js via onChange event and as a result the parent runs onSearchChange
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
