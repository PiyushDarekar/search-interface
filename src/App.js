import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import "./components/SearchBar.css";
import SearchResults from './components/SearchResults';

function App() {
  const [results, setResults] = useState([])

  return (
    <div className="App">
        <div className = "search-bar-container">
            <SearchBar setResults = {setResults}/>
            <SearchResults results = {results}/>
        </div>
    </div>
  );
}

export default App;
