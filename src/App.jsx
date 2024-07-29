import { useState } from 'react';
import useLocalStorage from 'use-local-storage';

// Helpers
import getData from './helpers/getData';

// Styles
import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const [userToFind, setUserToFind] = useState('')
  const [data, setData] = useState({})

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); 
  }

  const handleInputChange = (e) => {
    setUserToFind(e.target.value);
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const fetchedData = await getData(userToFind);
      setData(fetchedData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  return (
    <div className='page-wrapper' data-theme={theme}>
      <header className='page-header'>
        <h1 className='page-title heading-1'>
          devfinder
        </h1>
        <button className='theme-button' onClick={switchTheme}>
          {theme}
        </button>
      </header>
      <main>
        <form className='search-bar'>
          <input className='paragraph-1' type='text' value={userToFind} onChange={handleInputChange} placeholder='Search GitHub username...'/>
          <button className='search-button' onClick={(e) => handleClick(e)}>
            Search
          </button>
        </form>
        <article className='card'>
          <header className='card-header'>
            <div className='avatar'>
              <img src={data?.avatar} alt={data?.username} />
            </div>
            <div>
              <hgroup>
                <h2 className='username heading-2'>
                  {data?.username}
                </h2>
                <p className='handle'>
                  <a href={data?.profile}>
                    {`@${data?.handle}`}
                  </a>
                </p>
              </hgroup>
              <p className='joined'>
                {data?.joined}
              </p>
            </div>
          </header>
          <p className='bio'>
            {data?.bio}
          </p>
          <div className='stats-container'>
            <div className='stat'>
              <h3 className='stat-title heading-3'>
                Repos
              </h3>
              <p className='stat-number'>
                {data?.repos}
              </p>
            </div>
            <div className='stat'>
              <h3 className='stat-title heading-3'>
                Followers
              </h3>
              <p className='stat-number'>
                {data?.followers}
              </p>
            </div>
            <div className='stat'>
              <h3 className='stat-title heading-3'>
                Following
              </h3>
              <p className='stat-number'>
                {data?.following}
              </p>
            </div>
          </div>
          <footer className='card-footer'>
            <div className='url'>
              <div className='icon'>
                ic
              </div>
              <div>
                {data?.location ? data.location : 'Not available'}
              </div>
            </div>
            <div className='url'>
              <div className='icon'>
                ic
              </div>
              <div>
                {
                  data?.blog ?
                    <a href={data.blog}>
                      {data.blog}
                    </a>
                    :
                    'Not available'
                }
              </div>
            </div>
            <div className='url'>
              <div className='icon'>
                ic
              </div>
              <div>
              {
                  data?.twitter ?
                    <a href={data.twitter}>
                      {data.twitter}
                    </a>
                    :
                    'Not available'
                }
              </div>
            </div>
            <div className='url'>
              <div className='icon'>
                ic
              </div>
              <div>
              {
                  data?.company ?
                    <a href={data.company}>
                      {data.company}
                    </a>
                    :
                    'Not available'
                }
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default App;