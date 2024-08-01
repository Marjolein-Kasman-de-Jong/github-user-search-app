// Styles
import './search-input.css';

export default function SearchInput({ value, onChange }) {
    return (
        <input
            className='search-input paragraph-1'
            id='search-bar'
            name='search-bar'
            type='text'
            value={value}
            onChange={onChange}
            placeholder='Search GitHub username...'
        />
    )
}