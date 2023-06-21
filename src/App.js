import './App.css';
import MainButton from './components/main-button/index.js';
import SecondaryButton from './components/secondary-button/index.js';
import SearchBar from './components/search-bar/index.js';
function App() {
  return (
    <div className="App">
      <SearchBar />
      <SecondaryButton>say Hello</SecondaryButton>
      <MainButton >Login</MainButton>
    </div>
  );
}

export default App;
