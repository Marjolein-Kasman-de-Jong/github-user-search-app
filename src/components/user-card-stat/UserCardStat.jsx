// Helpers
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";

// Styles
import './user-card-stat.css';

export default function UserCardStat({ data, stat }) {
    return (
        <div className='stat'>
            <h3 className='stat-title heading-3'>
                {capitalizeFirstLetter(stat)}
            </h3>
            <p className='stat-number paragraph-4'>
                {data && data[stat]}
            </p>
        </div>
    )
}