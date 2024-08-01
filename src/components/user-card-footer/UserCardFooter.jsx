// Components
import UserCardFooterItem from '../user-card-footer-item/UserCardFooterItem';

// Styles
import './user-card-footer.css';

export default function UserCardFooter({ data }) {
    const items = ['location', 'blog', 'twitter', 'company'];

    return (
        <footer className='card-footer'>
            {
                items.map((item) => {
                    return <UserCardFooterItem key={item} data={data} item={item} />
                })
            }
        </footer>
    )
}