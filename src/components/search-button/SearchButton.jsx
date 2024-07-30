// Styles
import './search-button.css';

export default function SearchButton({ onClick }) {
    return (
        <button
            className='search-button button-2'
            onClick={(e) => onClick(e)}
        >
            Search
        </button>
    )
}
