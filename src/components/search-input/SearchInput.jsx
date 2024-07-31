// Styles
import './search-input.css';

export default function SearchInput({ value, onChange, onInputClick }) {
    return (
        <input
            className='search-input paragraph-1'
            id='search-bar'
            name='search-bar'
            type='text'
            value={value}
            onChange={onChange}
            onClick={onInputClick}
            placeholder='Search GitHub username...'
        />
    )
}