import { useState } from 'react';
import useLocalStorage from 'use-local-storage';

// Components
import PageTitle from './components/page-title/PageTitle';
import ThemeButton from './components/theme-button/ThemeButton';
import SearchBar from './components/search-bar/SearchBar';
import UserCard from './components/user-card/UserCard';

// Helpers
import getData from './helpers/getData';

// Styles
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');
  const [userToFind, setUserToFind] = useState('');
  const [data, setData] = useState(null);
  const [errorMessage, toggleErrorMessage] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const handleInputChange = (e) => {
    toggleErrorMessage(false);
    setData(null);
    setUserToFind(e.target.value);
  }

  const handleSearchButtonClick = async (e) => {
    e.preventDefault();

    try {
      const fetchedData = await getData(userToFind);
      fetchedData === undefined ? toggleErrorMessage(true) : toggleErrorMessage(false);
      setData(fetchedData);
      setUserToFind('');
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  return (
    <div className='page-wrapper' data-theme={theme}>
      <div className='content-wrapper'>
        <header className='page-header'>
          <PageTitle />
          <ThemeButton 
            theme={theme} 
            onClick={switchTheme} 
          />
        </header>
        <main>
          <SearchBar 
            value={userToFind} 
            onChange={handleInputChange} 
            handleSearchButtonClick={handleSearchButtonClick}
            errorMessage={errorMessage}
          />
          <UserCard data={data} />
        </main>
      </div>
    </div>
  )
}

export default App;