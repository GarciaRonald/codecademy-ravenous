import { useState } from 'react'
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App
