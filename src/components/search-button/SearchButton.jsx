// Styles
import './search-button.css';

export default function SearchButton({ handleSearchButtonClick }) {
    return (
        <button
            className='search-button button-2'
            onClick={handleSearchButtonClick}
        >
            Search
        </button>
    )
}