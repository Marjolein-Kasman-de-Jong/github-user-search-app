// Components
import UserCardHeader from '../user-card-header/UserCardHeader';
import UserCardBio from '../user-card-bio/UserCardBio';
import UserCardStats from '../user-card-stats/UserCardStats';
import UserCardFooter from '../user-card-footer/UserCardFooter';

// Styles
import './user-card.css';

export default function UserCard({ data }) {
    return (
        <article className='card'>
            <UserCardHeader data={data} />
            <UserCardBio data={data} />
            <UserCardStats data={data} />
            <UserCardFooter data={data} />
        </article>
    )
}
