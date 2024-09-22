import React from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar />
      <UserList />
    </div>
  );
};

export default App;
